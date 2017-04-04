import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RipperService } from '../ripper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [RipperService]
})
export class WelcomeComponent implements OnInit {
  // rippers: FirebaseListObservable<any[]>
  rippers;

  constructor( private RipperService: RipperService, private router: Router) { }

  ngOnInit() {
    this.RipperService.getRippers().subscribe( snap => {
      this.rippers = snap;
    });

  }

}
