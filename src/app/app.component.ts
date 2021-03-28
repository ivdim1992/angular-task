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
    const tutRef = this._fireStore.list('projects').query.equalTo('employees').get();
    console.log(tutRef);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    // /google.firestore.v1.Firestore/Listen/channel?database=projects%2Fangular-project-task%2Fdatabases%2F(default)&gsessionid=jKiy4pAVPhqvKOgQT0dx3VhyyaEngSQZqS52bX0amCI&VER=8&RID=rpc&SID=qrh0_X-aIDT19IFwKACF3A&CI=0&AID=514&TYPE=xmlhttp&zx=tclsjci7mjjv&t=
  }
}
