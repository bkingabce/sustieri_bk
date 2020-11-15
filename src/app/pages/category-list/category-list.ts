import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
  styleUrls: ['./category-list.scss'],
})
export class CategoryListPage {
  foodList = [];
  transportationList = [];
  shelterList = [];
  waterList = [];
  energyList = [];
  goodsAndServicesList = [];
  wasteManagementList = [];

  detail : boolean = false;

  constructor(
    public http: HttpClient,
    private route: Router) {

    this.http.get('/assets/data/challenges.json').toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key) && data[key].category == "Food")
          this.foodList.push(data[key]);
    });

    this.http.get('/assets/data/challenges.json').toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key) && data[key].category == "Transportation")
          this.transportationList.push(data[key]);
    });

    this.http.get('/assets/data/challenges.json').toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key) && data[key].category == "Shelter")
          this.shelterList.push(data[key]);
    });

    this.http.get('/assets/data/challenges.json').toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key) && data[key].category == "Water")
          this.waterList.push(data[key]);
    });

    this.http.get('/assets/data/challenges.json').toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key) && data[key].category == "Energy")
          this.energyList.push(data[key]);
    });

    this.http.get('/assets/data/challenges.json').toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key) && data[key].category == "Goods")
          this.goodsAndServicesList.push(data[key]);
    });

    this.http.get('/assets/data/challenges.json').toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key) && data[key].category == "Waste Management")
          this.wasteManagementList.push(data[key]);
    });
  }

    detailOn(){
      this.detail = true;
    }

    detailOff(){
      this.detail = false;
    }


}
