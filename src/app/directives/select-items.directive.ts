import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSelectItems]'
})
export class SelectItemsDirective {
  @HostBinding('style.border') border:string;
  @HostBinding('style.cursor') cursor:string = 'default';
  @HostBinding('style.opacity') opacity:number = 0.80;

  @HostListener('mouseover') onmouseover(Event) {
    this.cursor = 'pointer';
  }

  @HostListener('mouseleave') onmouseleave(Event) {
    this.cursor = 'default';
  }

  @HostListener('click') onmousedown(Event) {
      this.border = (this.border == '1px solid green') ? '1px solid #ddd' : '1px solid green';
      this.opacity = (this.opacity == 0.80) ? 1 : 0.80;
  }
  constructor() { }

}
