import { Component } from '@angular/core';
import firebase from "firebase/compat/app";
import initializeApp = firebase.initializeApp;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {

      apiKey: "AIzaSyAbeXQ6IDSGGoblwtmc1vB1hz17n6n8GBA",

      authDomain: "bookshelves-c3a59.firebaseapp.com",

      databaseURL: "https://bookshelves-c3a59-default-rtdb.europe-west1.firebasedatabase.app",

      projectId: "bookshelves-c3a59",

      storageBucket: "bookshelves-c3a59.appspot.com",

      messagingSenderId: "391078524843",

      appId: "1:391078524843:web:ce12c9626bfca61e8344ee"

    };
    const app = initializeApp(firebaseConfig);


// Initialize Firebase



  }
}
