import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CommonModule} from '@angular/common';
import {UserClass} from './models/userClass';
import {UserServiceService} from './service/user-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HelloWorldComponent,UserProfileComponent,CommonModule],
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
  constructor(private userServiceService:UserServiceService) {
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
  }

  public onUserEmit(userClass: UserClass): void {
    console.log("componente padre: ", userClass);
  }
}
