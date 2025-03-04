import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
    selector: 'app-home-route',
    imports: [
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        CommonModule,
    ],
    templateUrl: './home-route.component.html',
    styleUrl: './home-route.component.scss'
})
export class HomeRouteComponent {


  menuBarFixed: boolean = true;

  ngOnInit(): void {
    this.onscroll()
  }

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    if ( window.scrollY > 100) {
      this.menuBarFixed = true;
    }  else {
      this.menuBarFixed = true;
    }
  }
  
}
