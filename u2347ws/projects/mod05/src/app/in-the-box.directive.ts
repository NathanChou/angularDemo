import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InTheBox]'
})
export class InTheBoxDirective {

  // 設定成預設參數
  @Input('InTheBox') borderStyle: string = "";

  @HostListener("mouseenter") onMouseEnter() {
    if (!this.borderStyle)
      this.putInTheBox('solid 2px red');
    this.putInTheBox(this.borderStyle);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.putInTheBox('none');
  }

  constructor(private el: ElementRef) {
    // this.putInTheBox('solid 2px red');
  }

  private putInTheBox(borderStyle: string) {
    this.el.nativeElement.style.border = borderStyle;
  }

}
