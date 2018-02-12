import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { Camera } from '@ionic-native/camera';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  lat: any;
  lng: any;
  // creating users before addings
  users: any;
  user = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};

  constructor(public navCtrl: NavController, public geo: Geolocation, private camera: Camera, public restProvider: RestProvider ) {
    this.getUsers()
  }
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  ionViewDidLoad(){
    this.geo.getCurrentPosition().then( pos => {
      this.lat = pos.coords.latitude
      this.lng = pos.coords.longitude
    }).catch( err => console.log (err));
  }
}
