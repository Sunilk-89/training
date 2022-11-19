import { Component, OnInit } from '@angular/core';
import { Superhero } from 'src/model/superHero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  detailsView:boolean = false;
  shero?: Superhero;
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

  gethero(s: Superhero)  {
    if(!this.shero)
    {
      this.shero =s;
      this.detailsView = true;
    }else if(this.detailsView && s.id == this.shero.id)
    {
      this.detailsView = false;
    }else
    {
      this.shero =s;
      this.detailsView = true;
    }
   
    
  }

}
