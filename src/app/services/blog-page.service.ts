import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BlogService{
  
  base_url: string;
  constructor(private httpClient: HttpClient) {
    this.base_url = "http://localhost:3000/api/blog"
   }

  get(){
    return this.httpClient.get(`${this.base_url}/`)
  }

  getByID(id:String){
    return this.httpClient.get(`${this.base_url}/${id}`)
  }
}
