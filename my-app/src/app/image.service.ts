import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private api = 'http://localhost:3000/src/index.php';
  constructor(private http : HttpClient) { }

  abc(image:any){
  
    return this.http.post(this.api ,image)
  }
}
