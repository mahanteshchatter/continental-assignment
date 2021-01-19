import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      name: 'product-1'
    }, {
      name: 'product-2'
    }, {
      name: 'product-3'
    }, {
      name: 'product-4'
    }, {
      name: 'product-5'
    }, {
      name: 'product-6'
    }, {
      name: 'product-7'
    }, {
      name: 'product-8'
    }, {
      name: 'product-9'
    }, {
      name: 'product-10'
    }, {
      name: 'product-11'
    }, {
      name: 'product-12'
    }, {
      name: 'product-13'
    }, {
      name: 'product-14'
    }, {
      name: 'product-15'
    }, {
      name: 'product-16'
    }, {
      name: 'product-17'
    }, {
      name: 'product-18'
    }, {
      name: 'product-19'
    }, {
      name: 'product-20'
    }
  ];
  constructor() { }
  
  public getProducts() {
    return this.products;
  }
  public updateAndGetProducts(key:string) {
    return this.filterList(key);
  }
  private filterList(input:any) {
    let specialCharReg = /[!@#$%^&*\[\](),.?"~`+;/=\-\':{}|<>]/g;
    let specialChar = false, reg: any, list = [];
    if(specialCharReg.test(input)) {
      specialChar = true;
    } else {
      reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
    }
    this.products.forEach((column) => {
      if(specialChar) {
        if (column.name.indexOf(input) > -1) {
          column['viewed'] = true;
          list.push(column);
          return true;
        }
      } else {
        if(column.name.match(reg)) {
          column['viewed'] = true;
          list.push(column);
          return true;
        }
      }				
    });
    return list;   
  }

  clearRecentList() {
    this.products.forEach((column) => column['viewed'] = false);
  }
  
}
