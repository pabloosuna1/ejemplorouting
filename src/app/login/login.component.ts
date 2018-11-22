import { Component, OnInit } from '@angular/core';
import * as Cookies from 'es-cookie'; 
import axios from 'axios';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthenticationService, private router : Router) { }

  username : string
  password : string

  ngOnInit() {
    if(Cookies.get('user')){
      this.username = Cookies.get('user');
    }
    
  }

  login() : void {

    const body={
      user:this.username,
      password:this.password
    }
    /*
    axios.post('https://reco-imagina.herokuapp.com/login', body)
    .then(response =>{
      if(response.data === 'ok'){
        Cookies.set('user', this.username);
        this.auth.setLoggedIn(true);
        this.router.navigate([""]);
      }else{
        alert("Invalid credentials");
        this.auth.setLoggedIn(false);
      }
    });
 */

    
    if(this.username == 'admin' && this.password == 'admin'){
      Cookies.set('user', this.username);
      this.router.navigate([""]);

    }else {
      alert("Invalid credentials");
    }
   
  }

}
