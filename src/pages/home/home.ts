import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { Camera } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  lat: any;
  lng: any;

  constructor(public navCtrl: NavController, public geo: Geolocation, private camera: Camera) {

  }
  takeAPicture () {
  //  this.camera.getPicture({
  //    destinationType: this.camera.DestinationType.DATA_URL,
  //    targetWidth: 1000,
  //    targetHeight: 1000,
  //  }).then((ImageData) => {
  //    this.base64Image = "data:image/jpeg;base64," + ImageData;
  //  }, (err)=> {
  //    console.log(err)
  //  })
  navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
    destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

  }
  ionViewDidLoad(){
    this.geo.getCurrentPosition().then( pos => {
      this.lat = pos.coords.latitude
      this.lng = pos.coords.longitude
    }).catch( err => console.log (err));
  }
}
