import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  // NOTE: The order of route configuration is important because the router accepts the first route that matches a navigation request path.
  // Each routing module augments the route configuration in the order of import. If you listed AppRoutingModule first, the wildcard route would be registered before the hero routes.
  // The wildcard route —which matches every URL— would intercept the attempt to navigate to a hero route.
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    // HeroListComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
