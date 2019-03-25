import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1,2,3,4,5];

  rate: number = 0;

  previousRate: number = 0;

  tempRate: number;

  constructor() { }

  ngOnInit() {
  }

  setRate (rate: number): void {
    if (this.previousRate === rate)
      this.rate = 0;
    else 
      this.rate = rate;

    this.previousRate = this.rate
    this.tempRate = undefined;

    this.rated.emit(this.rate)
  }

  setTemporaryRate (rate: number): void {
    if (this.tempRate === undefined) {
      this.tempRate = this.rate;
    }
    this.rate = rate
  }

  clearTemporaryRate (): void {
    if (this.tempRate !== undefined) {
      this.rate = this.tempRate;
      this.tempRate = undefined;
    }
  }

}