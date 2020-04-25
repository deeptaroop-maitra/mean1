import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login()
  {
  this.authService.loginUser(this.loginForm.value)
      .subscribe((data) => {
         //console.log(data);
         const token = data.token;
         this.authService.token = token;
       }, error => console.error(error))
  }

}
