import { Component, OnInit } from '@angular/core';
import { Superhero } from 'src/model/superHero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  shero: any = {};
  superHeros:Superhero[]=[];
  constructor(private heroService:HeroService) { }

  ngOnInit() {
   this.getSuperHero();
  }

  getSuperHero(){
    this.heroService.getSuperHeroes().subscribe(res =>{
          this.superHeros = res;
    })
  }

  getSuperhero(s: any) : any{
   
      this.shero =(s.target as HTMLInputElement).value;
    
  }

}
