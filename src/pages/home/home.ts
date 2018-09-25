import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  loadListCnn() {
  	this.navCtrl.push(ListPage, {
  		id: 'cnn'
  	})
  }

  loadListBbc() {
  	this.navCtrl.push(ListPage, {
  		id: 'bbc-news'
  	})
  }

  loadListGoogle() {
  	this.navCtrl.push(ListPage, {
  		id: 'google-news'
  	})
  }

  loadListNbc() {
  	this.navCtrl.push(ListPage, {
  		id: 'nbc-news'
  	})
  }

}
