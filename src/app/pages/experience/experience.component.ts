import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences = [
    {
      startedYear: "2023",
      endYear: "present",
      role: "Graphic Designer || UI/UX Designer",
      company: "appsNmobile Solutions ltd",
      Location: "Accra - Ghana",
      jobType: "In-Office"
    },
    {
      startedYear: "2022",
      endYear: "2024",
      role: "Graphic Designer || UI Designer",
      company: "The First Reality",
      Location: "Accra - Ghana",
      jobType: "Remote",
    }
  ]
}
