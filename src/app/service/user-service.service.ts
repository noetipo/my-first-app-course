import { Injectable } from '@angular/core';
import {UserClass} from '../models/userClass';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private users:UserClass[] = []
  constructor() {
  let user1:UserClass = new UserClass(1,"noe","noe.tipo@gmail.com", true);
  let user2:UserClass= new UserClass(2,"wilber desde api rest","wilber@gmail.com", false);
  this.users.push(user1);
  this.users.push(user2);
  }
  public getUsers():UserClass[] {
  return this.users;
  }
  public getUser():UserClass{
  return this.users[1];
  }
}
