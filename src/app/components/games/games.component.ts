import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  userData!: Observable<any>;

  constructor(private firestore: Firestore) { 
    this.getData();
  }

  //readQuery ****************************************
  getData() {
    const collectionInstance = collection(this.firestore, 'games');
    collectionData(collectionInstance, { idField: 'id' }).subscribe(val => {
      console.log(val);
    })
    this.userData = collectionData(collectionInstance, { idField: 'id' });
  }
   //readQuery end ****************************************



}
