import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
  export class RipperService {
    rippers: FirebaseListObservable<any[]>;

    constructor(private angularFire: AngularFire) {
      this.rippers = angularFire.database.list('rippers');
      console.log(this.rippers);
    }

    getRippers() {
      return this.rippers;
    }

    saveRipper(ripper){
      this.rippers.push(ripper);
    }

    // getRipperById() {
    //   return this.angularFire.database.object('rippers/' + key);
    // }
}
