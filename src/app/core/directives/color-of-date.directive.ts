import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDateColor]',
})
export class ColorOfDateDirective implements AfterViewInit {
  @Input() appDateColor?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.appDateColor) {
      const currentColor = this.colorOfDate(this.appDateColor);

      this.renderer.setStyle(this.elementRef.nativeElement, 'boxShadow', currentColor);
    }
  }

  colorOfDate(date: string): string {
    const currentDate = new Date();
    const currentTime = new Date(date);
    const time = 24 * 60 * 60 * 1000;
    const diffDays =
      currentDate.getTime() <= currentTime.getTime() ? 0 : Math.round(Math.abs((+currentDate - +currentTime) / time));
    let diff = (currentDate.getFullYear() - currentTime.getFullYear()) * 12;

    diff -= currentTime.getMonth();
    diff += currentDate.getMonth();
    diff = diff <= 0 ? 0 : diff;
    if (diff > 6) {
      return '20px 15px 25px #800000';
    }

    if (diff >= 1 && diffDays >= 30) {
      return '20px 15px 25px #949400';
    }

    if (diffDays >= 7 && diffDays <= 30) {
      return '20px 15px 25px #008f00';
    }

    return '20px 15px 25px #000280';
  }
}
