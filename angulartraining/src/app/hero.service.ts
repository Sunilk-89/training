import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from 'src/model/superHero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  baseUrl = "http://localhost:3000/superheros";
  constructor(private http:HttpClient) 
  { 
    this.getSuperHeroes();
  }

  getSuperHeroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.baseUrl);
  
  }
}
