import { Component } from '@angular/core';

@Component({
  selector: 'app-material-page',
  templateUrl: './material-page.component.html',
  styleUrls: ['./material-page.component.scss']
})
export class MaterialPageComponent {
  materialKind = "請選擇"
  items = [
    {name:"請選擇",value:"../../assets/img/CTTLC_logo.svg"},
    {name:"切割片",value:"../../assets/img/material/切割片.png"},
    {name:"研磨片",value:"../../assets/img/material/研磨片.png"},
    {name:"腐蝕片",value:"../../assets/img/material/腐蝕片.png"},
    {name:"拋光片",value:"../../assets/img/material/拋光片.png"},
    {name:"外延片",value:"../../assets/img/material/外延片.png"},
  ]
  imgSrc = ''
  changeMaterialKind() { 
    console.log(this.materialKind);
    let v = this.items.filter(x=>x.name==this.materialKind)[0].value;
    this.imgSrc = v;
  }
}
