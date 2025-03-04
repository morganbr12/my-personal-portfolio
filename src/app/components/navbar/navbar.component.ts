import { Component, inject } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
    selector: 'app-navbar',
    imports: [],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  _images = inject(ImagesService);

  gabiEmail: String = 'christiancalculus@gmail.com';
}
