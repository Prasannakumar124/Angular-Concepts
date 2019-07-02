import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultcolor:string='transparent';
  // @Input() highlight:string="gray"
  @Input('appBetterHighlight') highlight:string="gray"
constructor(private elemref:ElementRef,private renderer:Renderer2) { }
ngOnInit(){
    // this.renderer.setStyle(this.elemref.nativeElement,'backgroundColor','yellow');
    this.backgroundcolor=this.defaultcolor;
  }
  // @HostBinding('style.backgroundColor') backgroundcolor:string='blue';
  @HostBinding('style.backgroundColor') backgroundcolor:string=this.defaultcolor;

  @HostListener('mouseenter') mouseover(eventdata:Event){
  //  this.backgroundcolor='pink'
   this.backgroundcolor=this.highlight;
    // this.renderer.setStyle(this.elemref.nativeElement,'backgroundColor','blue')
  }
  @HostListener('mouseleave') mouseleave(eventdata:Event){
    // this.backgroundcolor='transparent'
    this.backgroundcolor=this.defaultcolor
    // this.renderer.setStyle(this.elemref.nativeElement,'backgroundColor','transparent')
  }

}
