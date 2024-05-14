import { animate, style, transition, trigger } from '@angular/animations';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Subject, filter, pairwise, timer } from 'rxjs';

// const names: { [key: string]: string} = {
//   '': 'Inicio',
//   about: 'Sobre'
//   portfolio: 'Sobre'
//   about: 'Sobre'
//   about: 'Sobre'
// }

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.scss',
  animations: [
    trigger("inOutPaneAnimation", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate(
          "750ms ease-in-out",
          style({ transform: "translateX(0)" })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateX(0)" }),
        animate(
          "600ms ease-in-out",
          style({ transform: "translateX(100%)" })
        )
      ])
    ])
  ]
})
export class AnimationComponent {
  lastUrl = '';
  newUrl = '';
  toggleAnimation$ = new Subject<boolean>();

  constructor(
    private readonly router: Router
  ) {
    this.router.events.pipe(filter(e => e.constructor.name === 'RoutesRecognized'), pairwise()).subscribe((events) => {
      this.lastUrl = (events[0] as RoutesRecognized).url.split('/')[1];
      this.newUrl = (events[1] as RoutesRecognized).url.split('/')[1];
      this.createAnimation();
    })
  }

  createAnimation() {
    this.toggleAnimation$.next(true);

    timer(1500).subscribe(() => {
      this.toggleAnimation$.next(false);
    })
  }

}
