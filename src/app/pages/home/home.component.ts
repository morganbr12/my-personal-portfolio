import { Component } from '@angular/core';
import { ServiceComponent } from "../service/service.component";
import { WorksComponent } from "../works/works.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServiceComponent, WorksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
