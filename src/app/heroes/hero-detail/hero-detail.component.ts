import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  // NOTE: In the ngOnInit() method, use the ActivatedRoute service to retrieve the parameters for the route, pull the hero id from the parameters, and retrieve the hero to display.
  //       When the map changes, paramMap gets the id parameter from the changed parameters.
  ngOnInit(): void {
    // NOTE: AsyncPipe handles the observable subscription and the component's hero property will be (re)set with the retrieved hero.
    this.hero$ = this.route.paramMap.pipe(
      // NOTE: The switchMap operator does two things.
      //       It flattens the Observable<Hero> that HeroService returns and cancels previous pending requests.
      //       If the user re-navigates to this route with a new id while the HeroService is still retrieving the old id, switchMap discards that old request and returns the hero for the new id.
      switchMap((params: ParamMap) => this.service.getHero(params.get('id')!))
    );
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', { id: heroId }]);
  }
}
