import { Component } from '@angular/core';
import { TopRightBgComponent } from '../../../shared/components/top-right-bg/top-right-bg.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TopRightBgComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
