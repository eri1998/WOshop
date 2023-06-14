import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFooterData } from 'src/app/models/IFooterData.interfaces';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  items:IFooterData[] = [];
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
     this.http.get('/assets/json/footer.json').subscribe((data:any) => {
      this.items = data;
  })

  }
  
 
}
