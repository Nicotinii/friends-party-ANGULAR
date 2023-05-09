import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  userData!: Observable<any>;

  constructor(private firestore: Firestore) { 
    this.getData();
  }


  //sendQuery ****************************************
  addData(f: any) {

    const collectionInstance = collection(this.firestore, 'games');
    addDoc(collectionInstance, f.value).then(() => {
      console.log('Data Saved Successfully');
    })
      .catch((err) => {
        console.log(err);
      })
  }
  //sendQuery end ****************************************

  //readQuery ****************************************
  getData() {
    const collectionInstance = collection(this.firestore, 'games');
    collectionData(collectionInstance, { idField: 'id' }).subscribe(val => {
      console.log(val);
    })
    this.userData = collectionData(collectionInstance, { idField: 'id' });
  }
   //readQuery end ****************************************

  //updateQuery ****************************************
  updateData(id : string) {
    const docInstance = doc(this.firestore, 'games', id);
    const updateData = { name: 'Updated Name' };
    updateDoc(docInstance, updateData).then(() => {
      console.log('Data Updated Successfully');
    })
      .catch((err) => {
        console.log(err);
      })
  }
  //updateQuery end ****************************************

  //deleteQuery ****************************************
  deleteData(id : string) {
    const docInstance = doc(this.firestore, 'games', id);
    deleteDoc(docInstance).then(() => {
      console.log('Data Deleted Successfully');
    })
      .catch((err) => {
        console.log(err);
      })
  }

}
