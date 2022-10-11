import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Category } from 'src/app/Models/Category';
import { Mimusica } from 'src/app/Models/Mimusica';
import { User } from 'src/app/Models/User';
import { CategoryService } from 'src/app/Services/category.services';
import { global } from 'src/app/Services/global';
import { MimusicaService } from 'src/app/Services/mimusica.services';
import { UserService } from 'src/app/Services/user.services';




@Component({
  selector: 'app-miscanciones',
  templateUrl: './miscanciones.component.html',
  styleUrls: ['./miscanciones.component.css'],
  providers: [MimusicaService, UserService, CategoryService]
})
export class MiscancionesComponent implements OnInit {
  public page_title: string;
  public mimusica: Mimusica | any;
  public mimusicas: Array<Mimusica> | any;
  public status: any;
  public identity: any;
  public token: any;
  public url: any;
  public user: User | any;
  public categories: Category | any;
  // public user: User | any;

  constructor(
    private _mimusicaService: MimusicaService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _categoryService: CategoryService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = global.url;
    this.page_title = 'LISTADO DE CANCIONES'
  }

  ngOnInit(): void {
    this.getMimusicas();
  }

  getMimusicas() {
    this._mimusicaService.getMimusicas().subscribe(
      response => {
        if (response.status == 'success') {
          this.mimusicas = response.mimusicas;
          console.log(this.mimusicas);

        }
      },
      error => {
        console.log(error);

      }
    );
  }
  deletePost(id: any) {
    this._mimusicaService.delete(this.token, id).subscribe(
      response => {
        this.getMimusicas();
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }


}
