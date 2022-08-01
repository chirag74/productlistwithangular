import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/Category';
import { ManagmentServiceService } from 'src/app/services/managment-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  Category: Category[] = []; 
  constructor(private service:ManagmentServiceService) { }
  formModel : Category = new Category(0,"")

  ngOnInit(): void {
    this.listofCategory()
  }
  onSubmit(): void{
    this.Category.push(this.formModel)
  }
  listofCategory(){
    this.service.getAllCategory().subscribe(data=>{
      console.log(data);
      this.Category=data;
    })
  }
}





