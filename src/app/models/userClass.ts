export class UserClass {
  id?:number;
  name?: string;
  email?: string;
  isActive?:boolean;
  constructor(id?:number, name?: string, email?: string, isActive?:boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isActive = isActive;
  }
}
export class UserClassForm{
  id?:number;
  name?: string;
  email?: string;

  constructor(id?:number, name?: string, email?: string) {
    this.id = id;
    this.name = name;
    this.email = email;

  }
}
