import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import {
  FormsModule,
  FormControl,
  FormGroup
} from "@angular/forms";


@Component({
  selector: 'page-dailyCh',
  templateUrl: 'ecological-footprint.html',
  styleUrls: ['./ecological-footprint.scss'],
})
export class EcologicalFpPage {

  //Food
  packaging: string;
  wasteFood: string;
  processed: string;
  compost: string;
  locally: string;
  meat: string;

  food1 : number = 0;
  food2 : number = 0;
  food3 : number = 0;
  food4 : number = 0;
  food5 : number = 0;
  food6 : number = 0;
  foodSum : number;

  //Transportation
  car: string;
  inVehicle: string;
  travel: string;
  carSize: string;
  flights: string;

  transp1 : number = 0;
  transp2 : number = 0;
  transp3 : number = 0;
  transp4 : number = 0;
  transp5 : number = 0;
  transpSum : number;

  //Shelter
  homeType : string;
  secondHome : string;
  rooms : string;

  shelter1 : number = 0;
  shelter2 : number = 0;
  shelter3 : number = 0;
  shelterSum : number;

  //Water
  shower : string;
  toilet: string;
  teeth: string;
  lowFlush: string;

  water1 : number = 0;
  water2 : number = 0;
  water3 : number = 0;
  water4 : number = 0;
  waterSum : number;

  //Energy
  houseTemperature : string;
  dishwasher : string;
  LED : string;
  energyEff : string;
  turnOff: string;

  energy1 : number = 0;
  energy2 : number = 0;
  energy3 : number = 0;
  energy4 : number = 0;
  energy5 : number = 0;
  energySum : number = 0;

  //Goods & Services
  laundry: string;
  mended: string;
  newClothes : string;
  donate : string;
  doNotWear : string;
  shoes : string;
  electronics : string;

  gs1 : number = 0;
  gs2 : number = 0;
  gs3 : number = 0;
  gs4 : number = 0;
  gs5 : number = 0;
  gs6 : number = 0;
  gs7 : number = 0;
  gsSum : number;

  //Waste
  garbageSize: string;
  recycle: string;
  reuseItems: string;
  repairItems: string;
  ownBags: string;
  onlineShop: string;

  waste1: number = 0;
  waste2: number = 0;
  waste3: number = 0;
  waste4: number = 0;
  waste5: number = 0;
  waste6: number = 0;
  wasteSum: number = 0;

  //More
  szamolte : boolean = false;
  form: boolean = true;
  total: number;
  earth: number;
  hectar: number;

  constructor(
    public http: HttpClient,
    private route: Router
  ) { }

  foodTotal(){
    //1. kérdés
    if(this.packaging == "all"){this.food1 = 100;}
    else if (this.packaging == "most"){this.food1 = 75;}
    else if (this.packaging == "half"){this.food1 = 50;}
    else if(this.packaging == "some"){this.food1 = 25;}
    else {this.food1 = 0;}

    //2. kérdés
    if(this.wasteFood == "all"){this.food2 = 100;}
    else if (this.wasteFood == "most"){this.food2 = 75;}
    else if (this.wasteFood == "half"){this.food2 = 50;}
    else if(this.wasteFood == "some"){this.food2 = 25;}
    else {this.food2 = 0;}

    //3. kérdés
    if(this.processed == "all"){this.food3 = 100;}
    else if (this.processed == "most"){this.food3 = 75;}
    else if (this.processed == "half"){this.food3 = 50;}
    else if(this.processed == "some"){this.food3 = 25;}
    else {this.food3 = 0;}

    //4. kérdés
    if(this.compost == "yes"){this.food4 = -30;}
    else{this.food4=60;}

    //5. kérdés
    if(this.locally == "all"){this.food5 = 100;}
    else if (this.locally == "most"){this.food5 = 75;}
    else if (this.locally == "half"){this.food5 = 50;}
    else if(this.locally == "some"){this.food5 = 25;}
    else {this.food5 = 0;}

    //6. kérdés
    if(this.meat == "1"){this.food6 = 600;}
    else if (this.meat == "2"){this.food6 = 400;}
    else if (this.meat == "3"){this.food6 = 300;}
    else if(this.meat == "4"){this.food6 = 200;}
    else {this.food6 = 150;}

    this.foodSum = this.food1 + this.food2 + this.food3 + this.food4 + this.food5 + this.food6;

  }

  transportationTotal(){
    //1. kérdés
    if(this.car == "1"){this.transp1 = 200;}
    else if (this.car == "2"){this.transp1 = 100;}
    else if (this.car == "3"){this.transp1 = 50;}
    else if(this.car == "4"){this.transp1 = 0;}
    else {this.transp1 = -25;}

    //2. kérdés
    if(this.inVehicle == "1"){this.transp2 = 200;}
    else if (this.inVehicle == "2"){this.transp2 = 100;}
    else if (this.inVehicle == "3"){this.transp2 = 50;}
    else {this.transp2 = 0;}

    //3. kérdés
    if(this.travel == "1"){this.transp3 = 200;}
    else if (this.travel == "2"){this.transp3 = 100;}
    else if (this.travel == "3"){this.transp3 = 25;}
    else {this.transp3 = 0;}

    //4. kérdés
    if(this.carSize == "1"){this.transp4 = 200;}
    else if (this.carSize == "2"){this.transp4 = 100;}
    else if (this.carSize == "3"){this.transp4 = 50;}
    else {this.transp4 = -25;}

    //5. kérdés
    if(this.flights == "1"){this.transp5 = 400;}
    else if (this.flights == "2"){this.transp5 = 200;}
    else {this.transp5 = 0;}

    this.transpSum = this.transp1 + this.transp2 + this.transp3 + this.transp4 + this.transp5;
  }

  shelterTotal(){
    //1. kérdés
    if(this.homeType == "1"){this.shelter1 = 50;}
    else if (this.homeType == "2"){this.shelter1 = 25;}
    else if (this.homeType == "3"){this.shelter1 = 0;}
    else {this.shelter1 = -50;}

    //2. kérdés
    if(this.secondHome == "yes"){this.shelter2 = 400;}
    else if (this.secondHome == "others"){this.shelter2 = 200;}
    else{this.shelter2=0;}

    //3. kérdés
    if(this.rooms == "1"){this.shelter3 = 200;}
    else if (this.rooms == "2"){this.shelter3 = 100;}
    else if (this.rooms == "3"){this.shelter3 = 0;}
    else {this.shelter3 = -50;}

    this.shelterSum = this.shelter1 + this.shelter2 + this.shelter3;
  }

  waterTotal(){
    //1. kérdés
    if(this.shower == "1"){this.water1 = 100;}
    else if (this.shower == "2"){this.water1 = 50;}
    else if (this.shower == "3"){this.water1 = 25;}
    else {this.water1 = 0;}

    //2. kérdés
    if(this.toilet == "1"){this.water2 = 50;}
    else{this.water2 = 25;}

    //3. kérdés
    if(this.teeth == "1"){this.water3 = 50;}
    else{this.water3 = 25;}

    //4. kérdés
    if(this.lowFlush == "yes"){this.water4 = -50;}
    else{this.water4 = 0;}

    this.waterSum = this.water1 + this.water2 + this.water3 + this.water4;
  }

  energyTotal(){
    //1. kérdés
    if(this.houseTemperature == "1"){this.energy1 = 150;}
    else if (this.houseTemperature == "2"){this.energy1 = 100;}
    else {this.energy1 = -25;}

    //2. kérdés
    if(this.dishwasher == "1"){this.energy2 = 100;}
    else if (this.dishwasher == "2"){this.energy2 = 50;}
    else {this.energy2 = -50;}

    //3. kérdés
    if(this.LED == "1"){this.energy3 = 50;}
    else if (this.LED == "2"){this.energy3 = 25;}
    else {this.energy3 = -50;}

    //4. kérdés
    if(this.energyEff == "1"){this.energy4 = 50;}
    else if (this.energyEff == "2"){this.energy4 = 25;}
    else {this.energy4 = -50;}

    //5. kérdés
    if(this.turnOff == "never"){this.energy5 = 50;}
    else if (this.turnOff == "sometimes"){this.energy5 = 25;}
    else {this.energy5 = 0;}

    this.energySum = this.energy1 + this.energy2 + this.energy3 + this.energy4 + this.energy5;
  }

  gsTotal(){
    //1. kérdés
    if(this.laundry == "1"){this.gs1 = 100;}
    else if (this.laundry == "2"){this.gs1 = 50;}
    else {this.gs1 = 0;}

    //2. kérdés
    if(this.mended == "yes"){this.gs2 = -20;}
    else {this.gs2 = 0;}

    //3. kérdés
    if(this.newClothes == "yes"){this.gs3 = 200;}
    else {this.gs3 = -50;}

    //4. kérdés
    if(this.donate == "yes"){this.gs4 = -50;}
    else {this.gs4 = 100;}

    //5. kérdés
    if(this.doNotWear == "1"){this.gs5 = 100;}
    else if (this.doNotWear == "2"){this.gs5 = 75;}
    else if (this.doNotWear == "3"){this.gs5 = 50;}
    else {this.gs5 = 25;}

    //6. kérdés
    if(this.shoes == "1"){this.gs6 = 100;}
    else if (this.shoes == "2"){this.gs6 = 75;}
    else if (this.shoes == "3"){this.gs6 = 25;}
    else {this.gs6 = 0;}

    //7. kérdés
    if(this.electronics == "1"){this.gs7 = 200;}
    else if (this.electronics == "2"){this.gs7 = 100;}
    else if (this.electronics == "3"){this.gs7 = 75;}
    else {this.gs7 = 25;}

    this.gsSum = this.gs1 + this.gs2 + this.gs3 + this.gs4 + this.gs5 + this.gs6 + this.gs7;

  }

  wasteTotal(){
    //1. kérdés
    if(this.garbageSize == "1"){this.waste1 = 100;}
    else if (this.garbageSize == "2"){this.waste1 = 50;}
    else if (this.garbageSize == "3"){this.waste1 = 25;}
    else {this.waste1 = -50;}

    //2. kérdés
    if(this.recycle == "1"){this.waste2 = 200;}
    else if (this.recycle == "2"){this.waste2 = 100;}
    else if (this.recycle == "3"){this.waste2 = 50;}
    else if (this.recycle == "4"){this.waste2 = 25;}
    else {this.waste2 = -100;}

    //3. kérdés
    if(this.reuseItems == "yes"){this.waste3 = -25;}
    else {this.waste3 = 25;}

    //4. kérdés
    if(this.repairItems == "yes"){this.waste4 = -25;}
    else {this.waste4 = 25;}

    //5. kérdés
    if(this.ownBags == "yes"){this.waste5 = -25;}
    else {this.waste5 = 25;}

    //6. kérdés
    if(this.onlineShop == "1"){this.waste6 = 200;}
    else if (this.onlineShop == "2"){this.waste6 = 100;}
    else if (this.onlineShop == "3"){this.waste6 = 50;}
    else if (this.onlineShop == "4"){this.waste6 = 25;}
    else {this.waste6 = 0;}

    this.wasteSum = this.waste1 + this.waste2 + this.waste3 + this.waste4 + this.waste5 + this.waste6;
  }

  footprintCalc(){
    this.foodTotal();
    this.transportationTotal();
    this.shelterTotal();
    this.waterTotal();
    this.energyTotal();
    this.gsTotal();
    this.wasteTotal();

    this.total = (this.foodSum + this.transpSum + this.shelterSum + this.waterSum + this.energySum + this.gsSum + this.wasteSum)
    this.earth = Math.round((this.total / 300)*100)/100;
    this.hectar = Math.round(this.earth * 11.6*100)/100;

    this.szamolte = true;
    this.form = false;
  }

  reCalc(){
    this.szamolte = false;
    this.form = true;
  }


}
