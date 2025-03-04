import { Component } from '@angular/core';
import { HomeRouteComponent } from "./routes/home-route/home-route.component";

@Component({
    selector: 'app-root',
    imports: [HomeRouteComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-portfolio';
}
