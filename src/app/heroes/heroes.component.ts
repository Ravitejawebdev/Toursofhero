import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero : Hero = {
  //   id : 1,
  //   name : 'Pawan'
  // };

  heroes : Hero[] = [];
  // selectedHero?: Hero;

  constructor( private heroService: HeroService,private msgService : MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero:Hero): void {
  //   this.selectedHero = hero;
  //   this.msgService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
