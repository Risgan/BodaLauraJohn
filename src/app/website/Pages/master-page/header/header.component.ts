import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isVisible(): boolean {
    return window.matchMedia('(min-width: 768px)').matches;
  }

}
