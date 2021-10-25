import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formControls : any;
  
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:52870/api';

  formModel = this.fb.group(
  {
    Username : ['',[ Validators.required]],
    Email : ['', [Validators.required, Validators.email]],
    FullName : ['', [Validators.required]],
    Password  : ['', [Validators.required, Validators.minLength(4)]]
  });
  
  register() {
    var body = 
    {
      Username: this.formModel.value.Username,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }
  
}
