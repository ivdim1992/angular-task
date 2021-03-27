import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { RouterStoreFacade } from './+store';

const getObservable = (collection: AngularFirestoreCollection<any>) => {
  const subject = new BehaviorSubject([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: any[]) => {
    subject.next(val);
  });
  return subject;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  employees = getObservable(this._fireStore.collection('employees'));
  testVar: string;

  projects = this._fireStore.collection('projects').valueChanges();

  constructor(private _fireStore: AngularFirestore, private _routerStore: RouterStoreFacade) {}

  public ngOnInit(): void {
    // this._fireStore.collection("projects").add({
    //   name: "First Project",
    //   status: "done",
    //   createdAt: new Date().toLocaleDateString("en-BG"),
    // });
  }

  handleClick(id: string) {
    this._fireStore
      .collection('employees', (ref) => ref.orderBy('lastName'))
      .valueChanges()
      .subscribe((el) => {
        this._fireStore.doc(`/projects/${id}`).delete();
      });
  }
}
