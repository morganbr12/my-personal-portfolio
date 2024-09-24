import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {


  skills = [
    {
      icon: "assets/icons/figma.svg",
      percent: 78,
      language: "Figma"
    },
    {
      icon: "assets/icons/sketch.svg",
      percent: 70,
      language: "Sketch"
    },
    {
      icon: "assets/icons/ai.svg",
      percent: 80,
      language: "Adobe Illustrator"
    },
    {
      icon: "assets/icons/xd.svg",
      percent: 70,
      language: "Adobe XD"
    },
    {
      icon: "assets/icons/ae.svg",
      percent: 68,
      language: "Adobe After Effect"
    },
    {
      icon: "assets/icons/ps.svg",
      percent: 90,
      language: "Adobe Photoshop"
    }
  ]
}
