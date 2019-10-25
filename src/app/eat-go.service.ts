import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EatGoService {
  API_KEY:string ="AIzaSyCFCDqcWZryyPAnPa8h_cJVAWemz-kOhYo"
  constructor(private httpClient: HttpClient){ }

  public getRest(){
    return this.httpClient.get<Config>("http://localhost:3000/api/eatgo");
    //return this.httpClient.get<Config>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e06f5b3da2be4501af757078cf03a985`);
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}