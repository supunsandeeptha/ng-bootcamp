import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-list",
  template: `
    <div>
      <p>hero-list works!</p>
      <h1>{{ title }}</h1>
      <h1>{{ myhero.name }}</h1>
      <ul>
        <li *ngFor="let hero of heroes">{{ hero.name }}</li>
      </ul>
      <p *ngIf="heroes.length > 3">There are more heroes</p>
    </div>
  `,
  styleUrls: ["./hero-list.component.css"],
})
export class HeroListComponent implements OnInit {
  title: string;
  myhero: Hero;
  heroes = [
    new Hero(1, "supun"),
    new Hero(2, "Ranindu"),
    new Hero(3, "Sampath"),
    new Hero(6, "Nilum"),
  ];
  constructor() {
    this.title = "supun";
    this.myhero = this.heroes[0];
  }

  ngOnInit() {}
}
