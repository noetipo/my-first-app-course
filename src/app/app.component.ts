import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CommonModule} from '@angular/common';
import {UserClass, UserClassForm} from './models/userClass';
import {UserServiceService} from './service/user-service.service';
import {StatusPipe} from './pipe/status.pipe';
import {
  FormBuilder, FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule, Validators
} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserServiceApiService} from './service/user-service-api.service';
import {UserApiService} from './models/user-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HelloWorldComponent,
    UserProfileComponent,
    CommonModule,
    StatusPipe,
    FormsModule,
    ReactiveFormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent implements OnInit{
  title = 'my-first-app-course';
  //user:string = 'Wilber Tipo';
  public showComponent=true;
public users:UserClass[]=[];
  public user:UserClass = new UserClass(1,"Wilber","wilber@gmail.com",true);
public fechaActual= new Date();
  //public userClassForm:UserClassForm= new UserClassForm();

public userForm: FormGroup;

public userApiServices:UserApiService[]=[];

  constructor(private userServiceService:UserServiceService,
              private formBuilder:FormBuilder,
              private userServiceApiService:UserServiceApiService, private router: Router) {
    this.userForm=this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  toggleComponent() {
    this.showComponent = !this.showComponent;
    this.user.name = 'Noe';
    this.user.isActive = !this.user.isActive;
    this.user.isActive?this.user.name='Wilber':'Noe';

  }

  ngOnInit(): void {
    this.users=this.userServiceService.getUsers();

    this.user=this.userServiceService.getUser();
    console.log(this.fechaActual);
    //this.user.email='noe.tipo@gmail.com';


    this.getUserApi();


  }

  private getUserApi():void{
    this.userServiceApiService.getUser().subscribe(response=> {
      this.userApiServices=response;
    });
  }

  public onUserEmit(userClass: UserClass): void {
    console.log("componente padre: ", userClass);
  }

  /*enviarFormulario() {
    console.log(this.userClassForm);
  }*/
  public rectiveForm(): void {

    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }else {
      console.log("Formulario invalid");
    }

  }
  navigateToProfile() {
    this.router.navigate(['/user-profile']);
  }

  debugClick() {
    console.log('debugClick');
  }
  viewProfile(userId: number): void {
    this.router.navigate(['/user-profile', userId]);
  }

  viewProfileObject(user: UserApiService) {
    this.router.navigate(['/user-profile'], {
      queryParams: { id: user.id, name: user.name },
    });
  }
}
