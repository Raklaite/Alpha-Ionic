import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  user = { idActor: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};
  apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  // function after constructor
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  addUser(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/users', data)
      .subscribe(res => {
        resolve(res);
        this.getUsers()
      }, (err) => {
        reject(err);
      });
  });
};
saveUser() {
  return new Promise ((resolve, reject) => {
    this.http.post(this.apiUrl+ '/users', JSON.stringify(this.user))
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
    });
  })
}
}
