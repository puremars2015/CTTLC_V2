import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('assets/productlist.json'); // 替换成你的 JSON 文件路径
  }
}
