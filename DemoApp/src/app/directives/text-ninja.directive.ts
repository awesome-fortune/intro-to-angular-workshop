import { Directive, ElementRef, HostListener, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextNinja]'
})
export class TextNinjaDirective implements OnInit{
  @Input() textColor: string;
  @HostListener('mouseenter') onMouseEnter() {

    this.textTransform('uppercase');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.textTransform('none');
  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const customColor = this.textColor || '#000';
    this.renderer.setStyle(this.el.nativeElement, 'color', customColor);
  }
  private textTransform(transform: string) {
    this.renderer.setStyle(this.el.nativeElement, 'text-transform', transform);
  }

}
