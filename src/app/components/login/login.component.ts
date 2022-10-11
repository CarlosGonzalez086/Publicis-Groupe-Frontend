import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';

import { ActivatedRoute, Router, Params } from "@angular/router";
import { UserService } from 'src/app/Services/user.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string | any;
  public identity: any;
  public token: any;
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.page_title = 'Iniciar Sesion';
    this.user = new User(1, '', '','','','','','Usuario-Normal','','','');
  }

  ngOnInit(): void {
    //Se va ejecutar siempre y cuando se cierre sesion por parte del usuario cuando le llege el valor sure por la url
    this.logout();
  }
  onSubmit(form: any) {
    this._userService.signup(this.user).subscribe(
      response => {
        if (response.status != 'error') {
          this.status = 'success';
          this.token = response;
          //Usuario identificado
          this._userService.signup(this.user, <any>true).subscribe(
            response => {
              this.identity = response;
              console.log(this.token);
              console.log(this.identity);
              //Dejar recordado al usuario
              localStorage.setItem('token', this.token);
              localStorage.setItem('identity', JSON.stringify(this.identity));
              //Redirecciona a la pagina de inicia
              this._router.navigate(['inicio']);
            },
            error => {
              this.status = 'error';
              console.log(<any>error);
            }
          );
        }
        else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }
  logout() {
    this._route.params.subscribe(params => {
      let logout = +params['sure'];
      if (logout == 1) {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        //Redirecciona a la pagina de inicia
        this._router.navigate(['inicio']);
      }
    });
  }

}
