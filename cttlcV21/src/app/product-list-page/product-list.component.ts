import { Component, OnInit } from '@angular/core';
import { LocaldataService } from '../localdata-service/localdata.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
