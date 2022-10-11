import { Component, OnInit, DoCheck } from '@angular/core';
import { global } from './Services/global';


import { UserService } from './Services/user.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit, DoCheck{
  title = 'Publicis-Groupe-Frontend';
  public identity:any;
  public token:any;
  public url:any;
 
  public status:any;

  public categories:any;

  constructor(
    private _userService:UserService,
   
    
  ){
    this.loaduser();
    this.url = global.url;

  }
  ngDoCheck(): void {
    this.loaduser();
  }
  ngOnInit(): void {
    console.log('WebApp Cargada Correctamente');

    
  }
  loaduser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
