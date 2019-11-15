import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class InquiryService{
  constructor(public http:HttpClient){}
headers = new HttpHeaders().set('Content-Type', 'application/json');
  saveInquiry(data:any){
      return this.http.post("http://localhost:4042/api/add-inquiry",data,{headers:this.headers});
  }
 

}