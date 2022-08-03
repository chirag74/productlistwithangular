import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductmanagementServiceService } from 'src/app/services/productmangemnet-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route : Router,private service:ProductmanagementServiceService) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.route.navigateByUrl("/merchant")
  }
  viewProduct(){
    this.route.navigateByUrl("/shop")
  }
  categoryDetails(){
    this.route.navigateByUrl("/categories")
  }
  viewLogin(){
    this.route.navigateByUrl("/login")
  }
  viewLogout(){
    this.service.setUserLoggedOut();
    this.route.navigateByUrl("/");
  }

}
