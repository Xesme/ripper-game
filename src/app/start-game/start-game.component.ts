import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RipperService } from '../ripper.service';


@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css'],
  providers: [RipperService]
})
export class StartGameComponent implements OnInit {
   @Output() newRipperSender = new EventEmitter();

  constructor(public RipperService: RipperService) { }

  ngOnInit() {
  }


  updateCheckedChar = [];
  check(char){
    this.updateCheckedChar.push(char);
    }

    submitForm(name: string, score: number) {
      var newRipper = {
        name: name,
        characteristics: this.updateCheckedChar,
        score: 0
      };
      this.RipperService.saveRipper(newRipper);
    }

  public traits = [
    { value: 'sneaky', display: "Sneaky"},
    { value: 'stubborn', display: "Stubborn"},
    { value: 'obnoxious', display: "Obnoxious"},
    { value: 'clumsy', display: "Clumsy"},
    { value: 'arrogant', display: "Arrogant"},
    { value: 'manipulative', display: "Manipulative"},
    { value: 'quick', display: "Quick"},
    { value: 'perfectionist', display: "perfectionist"},
    { value: 'charasmatic', display: "Charasmatic"},
    { value: 'shy', display: "Shy"}
  ];
}
