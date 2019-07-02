import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authservice';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private authservice:AuthService) { }

  ngOnInit() {
  }
  Onloadserver(){
    this.router.navigate(['/servers'])
  }
  Onloadserver1(id:number){
    this.router.navigate(
      ['/servers',id,'edit'],
    {
      queryParams:{allowedit:'1'},
      fragment:'loading'
    })
  }
  LogIn(){
    this.authservice.login();
  }
  LogOut(){
    this.authservice.logout();
  }

}
