import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from "@angular/router";
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/category.services';
import { UserService } from 'src/app/Services/user.services';


@Component({
  selector: 'app-generomusical',
  templateUrl: './generomusical.component.html',
  styleUrls: ['./generomusical.component.css'],
  providers:[UserService,CategoryService]
})
export class GeneromusicalComponent implements OnInit {
  public page_title: string;
  public identity: any;
  public token: any;
  public category: Category;
  public status:any;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _categoryService:CategoryService
  ) {
    this.page_title = 'Genero Musical';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.category = new Category(1,'');
   }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    this._categoryService.create(this.token,this.category).subscribe(
      response => {
        if (response.status == 'success') {
            this.category = response.category;
            this.status = 'success';
            this._router.navigate(['/inicio']);
          
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
    
  }

}
