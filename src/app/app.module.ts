import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation'
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';

 // Import Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedPage } from '../pages/feed/feed';
import { TestPage } from '../pages/test/test';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Pro } from '@ionic/pro';
import { RestProvider } from '../providers/rest/rest';


const IonicPro = Pro.init('f9002139', {
  appVersion: "3.1.8"
});
console.log(IonicPro)
const newFn = Pro.monitoring.wrap(() => {
  throw new Error('error');
})
newFn()

 // init Ionic Pro for monitiring errors

@NgModule({ 
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    TestPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    RestProvider,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
