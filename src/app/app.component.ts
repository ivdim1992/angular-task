import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouterStoreFacade } from './+store';

// const getObservable = (collection: AngularFirestoreCollection<any>) => {
//   const subject = new BehaviorSubject([]);
//   collection.valueChanges({ idField: 'id' }).subscribe((val: any[]) => {
//     subject.next(val);
//   });
//   return subject;
// };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // employees = getObservable(this._fireStore.collection('employees'));
  testVar: string;

  projects: Observable<unknown> = this._fireStore.list('projects').valueChanges();

  constructor(private _routerStore: RouterStoreFacade, private _fireStore: AngularFireDatabase) {}

  public ngOnInit(): void {
    console.log();
    // this._fireStore
    //   .collection('projects')
    //   .add({
    //     name: 'First Project',
    //     status: 'done',
    //     createdAt: new Date().toLocaleDateString('en-BG'),
    //   })
    //   .then((el) => {
    //     debugger;
    //   })
    //   .catch((err) => {
    //     debugger;
    //   });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // const tutRef = this._fireStore.object('projects').set({ name: 'awdawd', age: 2 });
    // this._fireStore.list('projects').set({ id: 2, name: 'from app', age: 2 });

    // this._fireStore
    //   .list('employees')
    //   .valueChanges()
    //   .subscribe((el) => {
    //     debugger;
    //   });
    // this._fireStore.database.ref('projects').child('3').set({ id: 2, name: 'from app', age: 2 });

    const tutRef = this._fireStore.object('projects').valueChanges();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    // /google.firestore.v1.Firestore/Listen/channel?database=projects%2Fangular-project-task%2Fdatabases%2F(default)&gsessionid=jKiy4pAVPhqvKOgQT0dx3VhyyaEngSQZqS52bX0amCI&VER=8&RID=rpc&SID=qrh0_X-aIDT19IFwKACF3A&CI=0&AID=514&TYPE=xmlhttp&zx=tclsjci7mjjv&t=
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public handleClick(project) {
    debugger;
    return this._fireStore.database.ref('projects').child('3').update({ name: 'updated' });
  }
}
