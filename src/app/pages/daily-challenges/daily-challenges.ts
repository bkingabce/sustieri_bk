import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'page-dailyCh',
  templateUrl: 'daily-challenges.html',
  styleUrls: ['./daily-challenges.scss'],
})
export class DailyChPage {

  challenge = { first: '', second: '', third: '', fourth: '', fifth: ''};

  constructor(
    public http: HttpClient,
    private route: Router,
  ) {}

    taskCompleted1(): void{
      this.challenge.first='';
    }
    taskCompleted2(): void{
      this.challenge.second='';
    }
    taskCompleted3(): void{
      this.challenge.third='';
    }
    taskCompleted4(): void{
      this.challenge.fourth='';
    }
    taskCompleted5(): void{
      this.challenge.fifth='';
    }

}
