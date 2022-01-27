import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connecte : boolean = false;

  constructor(private router : Router) { }
  seConnecter (l,m)
  {
    if (l=="nadra" && m =="nadra")
    {
      this.connecte=true ;
     
      this.router.navigate(['/livre']);
   
    }else
    {
      alert("Login ou mot de passe incorrectes");
    }
  }
}
