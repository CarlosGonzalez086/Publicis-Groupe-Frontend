import { Component, OnInit,DoCheck  } from '@angular/core';
import { User } from 'src/app/Models/User';
import { global } from 'src/app/Services/global';
import { UserService } from 'src/app/Services/user.services';
import { ActivatedRoute, Router, Params } from "@angular/router";


@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css'],
  providers:[UserService]
})
export class MiperfilComponent implements OnInit,DoCheck  {

  public identity:any;
  public token:any;
  public status: any;
  public user : User|any;
  public url: any;
  public page_title: string;
  constructor(
    private _userService:UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.loaduser();
    this.page_title = 'Tu Datos Personales';
    this.user = new User(1, '', '','','','','','Usuario-Normal','','','');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
    this.user = new User(
      this.identity.sub,
      this.identity.nombre,
      this.identity.apaterno,
      this.identity.amaterno,
      this.identity.telefono,
      this.identity.fecha_nacimiento,
      this.identity.genero,
      this.identity.rol,
      this.identity.email,
      this.identity.password,
      this.identity.usuario
    );
    console.log(this.user);
    
    
  }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.loaduser();
 
  }
  loaduser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
  deletePost(email:any){
    this._userService.delete(this.token,this.user.email).subscribe(
        response => {
            this.user.email;
            localStorage.removeItem('identity');
            localStorage.removeItem('token');
            this._router.navigate(['inicio']);
        },
        error => {
          this.status = 'error';
          console.log(<any>error);
          
        }
    );
  }

}
