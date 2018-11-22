import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLogged: boolean = false;

  constructor() { }

  setLoggedIn(value:boolean){
    this.isLogged = value;
  }

  get loggedIn(){
    return this.isLogged;
  }
}
