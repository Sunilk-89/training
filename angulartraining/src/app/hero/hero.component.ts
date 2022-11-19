import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Superhero } from 'src/model/superHero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

 @Input() hero?:Superhero;
 @Output() sheroEvent = new EventEmitter<Superhero>();

 getDetails(h:Superhero | undefined){
  console.log("getDetails method called" + h?.superhero);
  this.sheroEvent.emit(h);
 }

}
