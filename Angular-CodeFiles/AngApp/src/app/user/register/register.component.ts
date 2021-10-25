import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UserService, private route: Router) { }

  formControl : any;
  formSubmit : boolean = false;

  ngOnInit(): void {

    this.service.formModel.reset();
    this.formControl = this.service.formModel.controls;
  }

  handleRegister()
  {
    this.service.register().subscribe(
      (res:any) =>{
        this.formSubmit = true;
        if(this.service.formModel.invalid)
        {
          alert("invalid form");
          return;
        }
        else
        {
          if(res.succeeded == false)
          {
            res.errors.forEach((ele:any) => {
              switch(ele.code)
              {
                case 'DuplicateUserName':
                  alert('Username is already taken');
                  break;
    
                default:
                  alert(ele.description);
                  break;
              }
              
            });
          }
          else{
            alert("Registered");
            this.route.navigate(["/user/login"]);
          }
        }

      },
      err => {
        this.formSubmit = false;
        if(this.service.formModel.invalid)
        {
          alert("invalid form");
          return;

        }
      }
    );
  }

}
