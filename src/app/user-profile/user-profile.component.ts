import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserClass} from '../models/userClass';
import {UserServiceService} from '../service/user-service.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-user-profile',
  imports: [],
  standalone:true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  @Input() user:UserClass = new UserClass();
  @Output() onUserEmit:EventEmitter<UserClass> = new EventEmitter<UserClass>();
  userId: string | null = null;
  private routeSub: Subscription | null = null;

  userName: string | null = null;
constructor(private route: ActivatedRoute) {
  console.log('UserProfileComponent constructor');

}
ngOnInit() {
  this.userId = this.route.snapshot.paramMap.get('id');
  console.log(this.userId);
  /*this.routeSub = this.route.paramMap.subscribe(paramMap => {
    this.userId = paramMap.get('id');
    console.log('Id actualizado:', this.userId);
  });*/

  this.route.paramMap.subscribe(params => {
    this.userId = params.get('id');
    console.log(this.userId);  // El id debe actualizarse aquí
  });
  this.route.queryParamMap.subscribe(params => {
    this.userId = params.get('id');
    this.userName = params.get('name');
    console.log('Id:', this.userId);
    console.log('Name:', this.userName);
  });
}
  public enviarEvento():void {
    this.user.isActive = !this.user.isActive;
    this.user.name='Usuario editado';
    this.onUserEmit.emit(this.user);

  }
}
