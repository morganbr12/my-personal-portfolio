import { Component } from '@angular/core';
import { ServiceComponent } from "../service/service.component";
import { WorksComponent } from "../works/works.component";
import { ExperienceComponent } from "../experience/experience.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServiceComponent, WorksComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
