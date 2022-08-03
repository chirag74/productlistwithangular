import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductmanagementServiceService } from '../services/productmangemnet-service.service';
import { NgHttpLoaderModule } from 'ng-http-loader';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ProductmanagementServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  loginSubmit2(loginForm:any){
    if(loginForm.email==='HR' && loginForm.password==='hr'){
      this.service.setUserLoggedIn();
      this.route.navigate(['/']); 
    }
    else{
      alert("Invalid credentials");
    }
  }

}
