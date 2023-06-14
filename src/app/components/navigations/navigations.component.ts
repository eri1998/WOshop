
import { Component,Input,OnInit } from "@angular/core";
import { INavLinks } from "src/app/models/INavLinks.interfaces";
import { NavigationService } from "src/app/services/navigation.service";





@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss'],
 
})
export class NavigationsComponent implements OnInit {
  @Input()visible:boolean=false;
  private hideTimerIn!: ReturnType<typeof setTimeout >;
  private hideTimerOut!: ReturnType<typeof setTimeout >;
  public showNewElement : number | null = null;
  public dropTrue !:boolean ;
  public underline!:boolean;
  public underlineReverse!:boolean;

  public navLinks:INavLinks[]=[];
  public condition = false ;
  public animationLeave=false;
  public dropMenu = false;



 constructor (private _navigationServices:NavigationService){

 }
 isFirstGroup(id: number): boolean {
  return [0, 1, 2].includes(id);
}

public usao(){
this.underline=false;
}
public izasao(){
this.underline=true;
this.underlineReverse = false;
  
  }

 public startShowNewElement(i:number){
  clearTimeout(this.hideTimerIn);
  this.underlineReverse = false;
  this.underline = true;
 
 
  
  this.showNewElement = i;
 }
 
public showDropMenu(i:number,id:number):void{
 
  clearTimeout(this.hideTimerOut);
if(this.navLinks[i].id === 4 ){
    this.dropMenu = true;
    this.condition = true;
}else{
  this.dropMenu = false;
    this.condition = false;
}
 

}
public hideDropMenu():void{
 
  this.dropMenu = false;
  this.hideTimerOut = setTimeout(() => {
    this.condition = false;
  }, 1000);
}



 public startHideNewElement(): void {
  this.underlineReverse = true;  
  this.hideTimerIn = setTimeout(() => {
  this.showNewElement = null;
  }, 1000); 

}

  ngOnInit(): void {
   this._navigationServices.getNavLinks().subscribe((response:INavLinks[])=>{
   this.navLinks=response;
  
      
    
  
   })
  }
  

}
