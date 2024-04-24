import { Component } from '@angular/core';
import { TopRightBgComponent } from '../../../shared/components/top-right-bg/top-right-bg.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TopRightBgComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
