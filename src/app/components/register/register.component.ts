import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  public page_title:string;
  public user:User;


  constructor(
     private _userService:UserService
  ) { 
    this.page_title = 'Crea una cuenta';
    this.user = new User(1, '', '','','','','','Usuario-Normal','','','');
  }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    this._userService.register(this.user).subscribe(
      response => {
        console.log(response);
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
