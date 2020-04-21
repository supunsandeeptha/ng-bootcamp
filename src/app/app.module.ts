import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeroService } from "./hero/hero.service";
import { HeroLogger } from "./hero/hero.logger";
import { HeroListComponent } from './hero/hero-list/hero-list.component';

@NgModule({
  // All the components are added in declerations
  declarations: [AppComponent, HeroComponent, HeroListComponent],
  // all other module imports are included in imports
  imports: [BrowserModule, FormsModule],
  // dependencies are included in providers
  providers: [HeroService, HeroLogger],
  bootstrap: [AppComponent],
})
export class AppModule {}
