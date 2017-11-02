import { Directive, ElementRef, Input , OnInit, Renderer,HostListener} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{

  @Input('highlight') public MyCOlorName:string;
  
  constructor(private el:ElementRef, private renderer:Renderer) {  //DI
   }
  ngOnInit(): void{
  
    
    this.renderer.setElementStyle(this.el.nativeElement,"color","#F2f2f2");
    
  }
  @HostListener("mouseenter")
  public onMouseEnter()
  {
    this.el.nativeElement.style.backgroundColor=this.MyCOlorName;
  }

  @HostListener("mouseleave")
  public anyNameHere(){
    this.renderer.setElementStyle(this.el.nativeElement,"backgroundColor",null);
  }
  

}
