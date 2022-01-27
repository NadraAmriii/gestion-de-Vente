import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  

  constructor(private sAuth : AuthService) { }

  ngOnInit(): void {
  }
  seConnecter (l,m)
  {  
     //console.log(l+ ' ' + m);
     this.sAuth.seConnecter(l,m);
  }

}
