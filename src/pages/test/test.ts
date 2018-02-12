import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
  })
  export class TestPage {
    users: any;
    user = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    }
    addUser() {
      this.restProvider.addUser(this.user)
      .then(data => {
        console.log(this.user);
      });
    }
  }
