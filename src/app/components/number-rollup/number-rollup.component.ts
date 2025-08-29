import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-rollup',
  standalone: true,
  imports: [],
  templateUrl: './number-rollup.component.html',
  styleUrl: './number-rollup.component.css'
})
export class NumberRollupComponent implements OnInit, OnDestroy {
  @Input() public start: number = 0;
  @Input() public end: number = 100;

  @Input() public duration: number = 1000;
  @Input() public postfix: string = "+";

  protected timer: number | undefined;
  protected number: number = this.start;

  ngOnInit() {
    // @ts-ignore
    this.timer = setInterval(() => {
      this.number += this.number < this.end ? 1 : -1;
      if (this.number === this.end) {
        clearInterval(this.timer);
      }
    }, Math.abs(Math.floor(this.duration / (this.end - this.start))));
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
