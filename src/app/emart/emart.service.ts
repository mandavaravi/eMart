import { Injectable } from '@angular/core';
import { Category } from './category';
import { SubCategory } from './sub-category';
import { Item } from './item';
import { Bill } from './bill';
import { Buyer } from './buyer';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})
export class EmartService {

  categories: Category[];
  subCategories: SubCategory[];
  allItems: Item[];
  cartItems: Item[];
  allBills: Bill[];
  allBuyers: Buyer[];
  allSellers: Seller[];
  
  constructor() { 
    this.cartItems = [];
    this.allBills = [];
   
    this.allBuyers = [{
                        id: 101,
                        username: 'John',
                        password: 'John',
                        email: 'John@abc.com',
                        mobile: 1234567890,
                        date: '11/02/2020'
                      },
                      {
                        id: 102,
                        username: 'Priya',
                        password: 'Priya',
                        email: 'Priya@abc.com',
                        mobile: 2222222222,
                        date: '05/02/2020'
                      }];
    this.allSellers = [{
                        id: 201,
                        username: 'abc',
                        password: 'abc',
                        company: 'ABC Makrketing Agency',
                        brief: 'Good marketing company',
                        gst: 1234,
                        address: 'Mumbai, India',
                        email: 'abc@gmail.com',
                        website: 'www.abc.com',
                        contact: 1231231231
                      },
                      {
                        id: 202,
                        username: 'sky',
                        password: 'sky',
                        company: 'Sky Suppliers',
                        brief: 'Good supplier company',
                        gst: 2345,
                        address: 'Chennai, India',
                        email: 'sky@gmail.com',
                        website: 'www.sky.com',
                        contact: 343434343434
                      }];
    this.categories = [{
                        id: 501,
                        name: 'Electronics',
                        brief: 'Varieties of Electronics like TVm Washing Machine etc.'
                      },
                      {
                        id: 502,
                        name: 'Mobiles',
                        brief: 'Varieties of Mobiles like smart phones, tablets etc.'
                      },
                      {
                        id: 503,
                        name: 'Clothes',
                        brief: 'Varieties of Clothes like Winter wears, Sarees etc.'
                      }];
    this.subCategories = [{
                            id: 701,
                            name: 'TV',
                            categoryId: 501,
                            brief: 'Experience the effect of Smart Tv and more...',
                            gstPercent: 2
                          },
                          {
                            id: 702,
                            name: 'Fridge',
                            categoryId: 501,
                            brief: 'Experience the varieties of refrigeration...',
                            gstPercent: 3
                          },
                          {
                            id: 703,
                            name: 'Tablets',
                            categoryId: 502,
                            brief: 'Experience the vatiety of gadgets...',
                            gstPercent: 4
                          },
                          {
                            id: 704,
                            name: 'Smart Phones',
                            categoryId: 502,
                            brief: 'Experience the effect of Smart Tv and more...',
                            gstPercent: 4
                          },
                          {
                            id: 705,
                            name: 'Winter Wears',
                            categoryId: 503,
                            brief: 'Keep Yourself Warm...',
                            gstPercent: 3
                          },
                          {
                            id: 706,
                            name: 'Sarees',
                            categoryId: 503,
                            brief: 'Experience the colorful variety...',
                            gstPercent: 2
                          }];
    this.allItems = [{
                        id: 101,
                        name: '55 inch Samsung smart TV',
                        categoryId: 501,
                        subCategoryId: 701,
                        price: 120000,
                        description: 'Sharp pictures',
                        stock: 10,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 102,
                        name: '40 inch LG smart TV',
                        categoryId: 501,
                        subCategoryId: 701,
                        price: 100000,
                        description: 'Sharp pictures',
                        stock: 8,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1495563125611-fa99f0cd529f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 103,
                        name: 'Double Door Samsung Fridge',
                        categoryId: 501,
                        subCategoryId: 702,
                        price: 30000,
                        description: 'Good Cooling',
                        stock: 15,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 104,
                        name: 'Single Door LG Fridge',
                        categoryId: 501,
                        subCategoryId: 702,
                        price: 15000,
                        description: 'Good Cooling',
                        stock: 20,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1536353284924-9220c464e262?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 105,
                        name: 'IPad ',
                        categoryId: 502,
                        subCategoryId: 703,
                        price: 80000,
                        description: 'Greater Images',
                        stock: 20,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1555631545-9dc21031669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 106,
                        name: 'Samsung Tab',
                        categoryId: 502,
                        subCategoryId: 703,
                        price: 40000,
                        description: 'Greater Images',
                        stock: 10,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1576097492152-4687ccd1c6ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 107,
                        name: 'iPhone 7S',
                        categoryId: 502,
                        subCategoryId: 704,
                        price: 80000,
                        description: 'Sharp pictures',
                        stock: 10,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 108,
                        name: 'Samsung A7',
                        categoryId: 502,
                        subCategoryId: 704,
                        price: 12000,
                        description: 'Sharp pictures',
                        stock: 15,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1571684016213-078cb804df1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 109,
                        name: 'Thermal wear',
                        categoryId: 503,
                        subCategoryId: 705,
                        price: 1000,
                        description: 'Keep Warm',
                        stock: 25,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 110,
                        name: 'Jerkin',
                        categoryId: 503,
                        subCategoryId: 705,
                        price: 1800,
                        description: 'Be Warm',
                        stock: 20,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 111,
                        name: 'Kancheepuram Saree',
                        categoryId: 503,
                        subCategoryId: 706,
                        price: 12000,
                        description: 'Authentic',
                        stock: 10,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/reserve/xgd4JRWRCBo4L93rmO3w_P1070063.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                      },
                      {
                        id: 112,
                        name: 'Cotton Saree',
                        categoryId: 503,
                        subCategoryId: 706,
                        price: 1200,
                        description: 'Authentic',
                        stock: 20,
                        remarks: 'remarks',
                        image: 'https://images.unsplash.com/photo-1548686969-35dae9787183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                    }];
    
  }
  getAllItems():Item[]{
    return [].concat(this.allItems);
  }

  getCategories():Category[]{
    return [].concat(this.categories);
  }

  getSubCategories():SubCategory[]{
    return [].concat(this.subCategories);
  }

  getAllBills():Bill[]{
    return this.allBills;
  }

  getCategory(catId: number):Category{
    let category:Category;
    let size = this.categories.length;
    for(let i=0; i < size; i++){
      if(this.categories[i].id==catId){
        category = {
                      id: this.categories[i].id,
                      name: this.categories[i].name,
                      brief: this.categories[i].brief
                    };
        break;
      }
    }
    
    return category;
  }

  getSubCategory(catId: number):SubCategory{
    let subCategory:SubCategory;
    let size = this.subCategories.length;
    for(let i=0; i < size; i++){
      if(this.subCategories[i].id==catId){
        subCategory = {
                      id: this.subCategories[i].id,
                      name: this.subCategories[i].name,
                      brief: this.subCategories[i].brief,
                      categoryId: this.subCategories[i].categoryId,
                      gstPercent: this.subCategories[i].gstPercent
                    };
        break;
      }
    }
    return subCategory;
  }

  getItem(itemId: string):Item{
    let item:Item;
    let size = this.allItems.length;
    for(let i=0; i<size; i++){
      if(this.allItems[i].id == +itemId){
        //item = this.allItems[i];
        item = {
                  id: this.allItems[i].id,
                  name: this.allItems[i].name,
                  categoryId: this.allItems[i].categoryId,
                  subCategoryId: this.allItems[i].subCategoryId,
                  price: this.allItems[i].price,
                  description: this.allItems[i].description,
                  stock: this.allItems[i].stock,
                  remarks: this.allItems[i].remarks,
                  image: this.allItems[i].image
               };
        break;
      }
    }
    return item;
  }

  addToCart(itemId: number){
   let item:Item = this.getItem(itemId+'');
   this.cartItems.push(item);
  }

  getAllCart(){
    return [].concat(this.cartItems);
  }

  deleteCartItem(itemNo: number){
    let size = this.cartItems.length;
    for(let i=0;i<size;i++){
      if(this.cartItems[i].id==itemNo){
        this.cartItems.splice(i,1);
        break;
      }
    }
  }

  addBill(buyerId: string, todayDate: string, total: number){
    let billSize = this.allBills.length;
     
    let bill:Bill = {
                      id: 200 + ++billSize,
                      buyerId: +buyerId,
                      type: 'Debit',
                      date: todayDate,
                      remarks: '',
                      items: this.cartItems,
                      amount: total
                    };
    
    this.allBills.push(bill);
    this.cartItems = [];
  }

  validateBuyer(user: string, password: string){
    let buyer: Buyer;
    let size = this.allBuyers.length;
    for(let i=0; i<size; i++){
      if(this.allBuyers[i].username==user && this.allBuyers[i].password==password){
        buyer = {
                  id: this.allBuyers[i].id,
                  username: this.allBuyers[i].username,
                  password: this.allBuyers[i].password,
                  email: this.allBuyers[i].email,
                  mobile: this.allBuyers[i].mobile,
                  date: this.allBuyers[i].date
                }
        break;
      }
    }
    return buyer;
  }

  validateSeller(user: string, password: string){
    let seller: Seller;
    let size = this.allSellers.length;
    for(let i=0; i<size; i++){
      if(this.allSellers[i].username==user && this.allSellers[i].password==password){
        seller = {
                    id: this.allSellers[i].id,
                    username: this.allSellers[i].username,
                    password: this.allSellers[i].password,
                    company: this.allSellers[i].company,
                    brief: this.allSellers[i].brief,
                    gst: this.allSellers[i].gst,
                    address: this.allSellers[i].address,
                    email: this.allSellers[i].email,
                    website: this.allSellers[i].website,
                    contact: this.allSellers[i].contact
                }
        break;
      }
    }
    return seller;
  }

}
