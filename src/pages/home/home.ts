import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

import { TestPage } from '../test/test';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 //private url:string = 'http://localhost:3030/v1';
 private url:string = 'https://jsonplaceholder.typicode.com/todos/1';

 public users: Array<{}>;
 

  constructor(
    public navCtrl: NavController,
    public http: Http
  ) {
     this.http.get(this.url + '/users')
              .map(res => res.json())
              .subscribe(data => {
                this.users = data;
              })

  }

  goToTestPage(){
    this.navCtrl.push(TestPage);

  }
}
