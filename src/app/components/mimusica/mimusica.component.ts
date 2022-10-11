import { Component, OnInit } from '@angular/core';
import { Mimusica } from 'src/app/Models/Mimusica';
import { CategoryService } from 'src/app/Services/category.services';
import { global } from 'src/app/Services/global';
import { MimusicaService } from 'src/app/Services/mimusica.services';
import { UserService } from 'src/app/Services/user.services';
import { ActivatedRoute, Router, Params } from "@angular/router";



@Component({
  selector: 'app-mimusica',
  templateUrl: './mimusica.component.html',
  styleUrls: ['./mimusica.component.css'],
  providers:[UserService,MimusicaService,CategoryService]
})
export class MimusicaComponent implements OnInit {
  public page_title: string;
  public identity: any;
  public token: any;
  public mimusica:Mimusica|any;
  public status:any;
  public categories:CategoryService|any;

  public url:any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _categoryService:CategoryService,
    private _mimusica:MimusicaService
  ) { 
    this.page_title = 'Agregar Musica';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getCategories();
    // this.post = new Post(1,this.identity.sub,1,'','',null,null);   
     this.mimusica = new Mimusica(1,this.identity.sub,1,'',''); 
     //console.log(this.post);
    
  }
  onSubmit(form:any){
    this._mimusica.create(this.token,this.mimusica).subscribe(
      response => {
        if (response.status == 'success') {
              this.mimusica = response.mimusica;
              this.status = 'success';
              this._router.navigate(['/inicio'])
        }
        else {
          this.status = 'error'; 
        }
      },
      error => {
        console.log(<any>error);
        this.status = 'error';
      }
    );
}
getCategories(){
  this._categoryService.getCategories().subscribe(
    response => {
        if (response.status == 'success') {
                this.categories = response.categories;
        }
    },
    error => {
          console.log(<any>error);         
    }
  );
}

}
