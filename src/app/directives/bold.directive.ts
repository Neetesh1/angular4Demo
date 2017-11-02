import { Directive, Input , OnInit,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit{
  
    @Input() public :string;

  constructor(private el:ElementRef, private renderer:Renderer) { 

  }
  ngOnInit(): void{
    
      //this.el.nativeElement.style.font.style='bold';
      this.renderer.setElementStyle(this.el.nativeElement,"font-weight","900");
      
    }

}
