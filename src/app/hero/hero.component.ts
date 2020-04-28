import { Component } from "@angular/core";
import { HeroService } from "./hero.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent {
  title = "Hero Component";
  // String interpulation
  hero = { name: "Supun Sandeeptha", salary: 5000.5, joiningDate: new Date() };
  heroes = [];
  currentStyles = { "font-weight": "bold" };
  // property binding
  imgUrl = "../../favicon.ico";

  // event binding
  onClickHandler(hero) {
    console.log(hero);
    alert(hero.name);
  }

  // constructor
  constructor(private heroservice: HeroService) {
    this.heroes = this.heroservice.getHeroes();
  }
}
