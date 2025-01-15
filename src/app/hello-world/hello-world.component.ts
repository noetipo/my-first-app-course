import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {UserServiceService} from '../service/user-service.service';
import {NgForOf} from '@angular/common';
import {UserClass} from '../models/userClass';

@Component({
  selector: 'app-hello-world',
  standalone:true,
  imports: [
    UserProfileComponent,
    NgForOf
  ],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges
{

  constructor() {
    console.log("constructor carga la plantilla");

  }

  ngOnInit(): void {
    console.log("ngOnInit: carga la data inicial");



  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit: carga la data despues de ngOnInit");
  }

  ngOnDestroy(): void {

    console.log("ngOnDestroy: Ejecuta cuando cierra el componente");
  }

  ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChanges: ejecuta cuando hay cambios en algun variable");
  }


}
