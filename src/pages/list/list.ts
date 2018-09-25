import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public items:any;
  public create:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
     this.getData();
  }

  getData() {

    let newsType = this.navParams.get('id');

    let url = 'https://newsapi.org/v2/top-headlines?sources='+ newsType +'&apiKey=589205a3e50e4f57ab6c56133f8fb08d';
    let data: Observable<any> = this.http.get(url);

    data.subscribe(result => {

      this.items = result.articles;

      let newDate = new Date(result.articles.publishAt);

    })


  }

}
