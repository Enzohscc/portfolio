import { Component } from '@angular/core';
import { TopRightBgComponent } from '../../shared/components/top-right-bg/top-right-bg.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TopRightBgComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
