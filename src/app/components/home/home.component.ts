import { Component, OnInit } from '@angular/core';
import { BaseRequestOptions, Headers, Http,URLSearchParams } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { Fun } from '../../models/Fun.model';
import { Stay } from '../../models/Stay.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model:Date;
  listFun:Fun[];
  listStay:Stay[];


  constructor(private http:Http) { }

  ngOnInit() {
    if (localStorage.getItem("listFun") != null && localStorage.getItem("listStay") != null ) {
      this.listFun = eval(localStorage.getItem("listFun"));
      this.listStay = eval(localStorage.getItem("listStay"));
    } else {
      this.getListFun();
      this.getListStay();
    }


  }

  getListFun(){
    this.http.get('../../assets/json/fun.json')
     .subscribe(res => {
       let data:any = res;
       this.listFun = eval(data._body);
       localStorage.setItem("listFun",JSON.stringify(this.listFun));
       console.log(
         this.listFun
       );
     });
  }

  getListStay() {
    this.http.get('../../assets/json/stay.json')
     .subscribe(res => {
       let data:any = res;
       this.listStay = eval(data._body);
       localStorage.setItem("listStay",JSON.stringify(this.listStay));
       console.log(
         this.listStay
       );
     });
  }

  getStar( rango:number, star:number ):string {
    if ( star <= rango ) {
      return "fa fa-star";
    }
    if ( star > rango && (rango%2 > 0) ) {
      rango+=.5;
      if(rango == star){
        return "fa fa-star-half-o";
      }
    }
      return "fa fa-star-o";
  }

}
