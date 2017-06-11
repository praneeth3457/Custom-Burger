import { Component, OnInit } from '@angular/core';
import { ConstantService } from './../services/constant.service';
import { Price } from './../classes/price';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css', './../app.component.css'],
  providers: [ConstantService]
})
export class BuildComponent implements OnInit {
  burgerTypes = {};
  buildFields = [];
  selectedChoice = [];
  nextChoice = {};
  isBurgerType:boolean = true;
  customerPlan:any = {};
  pricing: Price = new Price();
  calories: number = 0;

  constructor(private constant : ConstantService) {
    this.constant = constant;
  }

  // THIS FUNCTION IS USED TO TAKE FOR THE FIRST QUESTION AFTER THE BURGER TYPE IS SELECTED
  onNext(burgerType) {
    let that = this;
    this.customerPlan = {};
    for(let i=0; i<this.buildFields.length; i++) {
      if(this.buildFields[i].type == burgerType){
        this.selectedChoice = this.buildFields[i];
        this.nextChoice = this.buildFields[i].values[0];
        this.isBurgerType = false;


        this.getPricing(this.buildFields[i].basePrice, 0);
      }
    }
  }

  // THIS FUNCTION IS USED TO TAKE FOR THE NEXT PAGES IN BUILDING THE BURGER
  onNextPage(data){
    let obj = data[Object.keys(data)[0]]; // Bread Type
    //this.customerPlan.prototype.obj = data[Object.keys(data)[1]];
    console.log(this.selectedChoice);
    for(let i=0; i<this.selectedChoice.values.length; i++) {

      if(this.selectedChoice.values[i].item == data.item){
        if(i+1 < this.selectedChoice.values.length){
          console.log(i + '-' +  this.selectedChoice.values.length);
          this.nextChoice = this.selectedChoice.values[i+1];
        } else {
          console.log("DONE!");
        }
      }
    }
  }

  // THIS FUNCTION IS USED TO GO BACK TO PREVIOUS PAGE/QUESTION
  onBackPage(data) {
    for(let i=0; i<this.selectedChoice.values.length; i++) {
      if(this.selectedChoice.values[i].item == data.item){
        if(i <= this.selectedChoice.values.length && i != 0){
          console.log(i + '-' +  this.selectedChoice.values.length);
          this.nextChoice = this.selectedChoice.values[i-1];
        } else {
          this.isBurgerType = true;
          this.nextChoice = this.buildFields[i].values[0];
        }
      }
    }
  }

  getPricing(base, additional) {
    if(base > 0){
      this.pricing.base = base;
    }
    this.pricing.additional += additional;
    this.pricing.tax= ((this.pricing.base + this.pricing.additional) * 8)/100;
    this.pricing.total = this.pricing.base + this.pricing.additional + this.pricing.tax;
    parseInt(this.pricing.tax.toFixed(2));
    parseInt(this.pricing.total.toFixed(2));
  }

  priceCal(prcCal) {
    this.getPricing(0, prcCal.addPrice);
    this.calories += prcCal.calories;
  }

  ngOnInit() {
    this.burgerTypes = this.constant.getBurgerTypes();
    this.buildFields = this.constant.getBuildFields();
  }

}
