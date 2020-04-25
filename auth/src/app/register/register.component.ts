import { Component, OnInit } from '@angular/core';
import { Users } from '../users.model';
import {AuthService} from '../auth.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  users: Users = {
    fname:'',
    email: '',
    password: ''
  };
 
  registerUser(event)
  {
    event.preventDefault();
    const target = event.target;
    const fname = target.querySelector('#fname').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    this.authService.registerUser(fname, email, password)
      .subscribe((data: string) => {
         console.log(data);
       }, error => console.error(error))
  }

}
