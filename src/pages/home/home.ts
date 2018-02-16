import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  private image: string;
  lat: any;
  lng: any;
  // creating users before addings
  users: any;
  user = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};

  constructor(public navCtrl: NavController, public geo: Geolocation, private camera: Camera, public restProvider: RestProvider, private domSanitizer: DomSanitizer, public alertCtrl: AlertController ) {
    this.getUsers()
  }
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  };
  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        this.displayErrorAlert(err);
      });
}
displayErrorAlert(err){
  console.log(err);
  let alert = this.alertCtrl.create({
     title: 'Error',
     subTitle: 'Error while trying to capture picture',
     buttons: ['OK']
   });
   alert.present();
}

  ionViewDidLoad(){
    this.geo.getCurrentPosition().then( pos => {
      this.lat = pos.coords.latitude
      this.lng = pos.coords.longitude
    }).catch( err => console.log (err));
  }
}
