import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserClass} from '../models/userClass';
import {UserServiceService} from '../service/user-service.service';


@Component({
  selector: 'app-user-profile',
  imports: [],
  standalone:true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  @Input() user:UserClass = new UserClass();
  @Output() onUserEmit:EventEmitter<UserClass> = new EventEmitter<UserClass>();
constructor() {
}
  public enviarEvento():void {
    this.user.isActive = !this.user.isActive;
    this.user.name='Usuario editado';
    this.onUserEmit.emit(this.user);
  }
}
