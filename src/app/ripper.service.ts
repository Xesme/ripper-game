import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
  export class RipperService {
    rippers: FirebaseListObservable<any[]>;

    constructor(private angularFire: AngularFire) {
      this.rippers = angularFire.database.list('rippers');
    }

    getRippers() {
      return this.rippers;
    }

    // getRipperById() {
    //   return this.angularFire.database.object('rippers/' + key);
    // }
}
