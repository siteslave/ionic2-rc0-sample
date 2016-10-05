import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import CryptoJS from 'crypto-js'
import moment from 'moment'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: Object

  constructor(public navCtrl: NavController) {
   
    // moment
    console.log(moment().format('YYYY-MM-DD'))
    // Encrypt 
    var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
    console.log('Encrypted: ' + ciphertext.toString())
    // Decrypt 
    var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    
    console.log('Decrypted: ' + plaintext);

    this.options = {
      chart: {
        type: 'bar'
      },
      title: { text: 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
    
  }

}
