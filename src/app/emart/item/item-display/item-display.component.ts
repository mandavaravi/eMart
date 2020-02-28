import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';
import { Category } from '../../category';
import { SubCategory } from '../../sub-category';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

  item:Item;
  category: Category;
  subCategory: SubCategory;

  constructor(protected activatedRoute: ActivatedRoute,
              protected emartService: EmartService,
              protected router: Router) { }

  ngOnInit(): void {
    this.activatedRoute
        .paramMap
        .subscribe(
                    (param)=>{
                                let id = param.get('iId');  
                                this.item = this.emartService.getItem(id);
                                this.category = this.emartService.getCategory(this.item.categoryId);
                                this.subCategory = this.emartService.getSubCategory(this.item.subCategoryId);  
                              }
                  );
  }

  addToCart(itemId: number){
    this.emartService.addToCart(itemId);
    this.router.navigate(['item-list']);
  }

}
