import { Injectable } from "@angular/core";
import { HeroLogger } from "./hero.logger";

@Injectable()
export class HeroService {
  heroes = [
    { id: 1, name: "Jane" },
    { id: 2, name: "Rohan" },
    { id: 6, name: "Sandaru" },
    { id: 4, name: "Supun" },
    { id: 9, name: "Rohan" },
  ];

  //constructor
  constructor(private logger: HeroLogger) {}
  getHeroes() {
    this.logger.warn("Get Heroes Fetched");
    this.logger.error("Get Heroes Fetched");
    this.logger.log("Get Heroes Fetched");
    return this.heroes;
  }
}
