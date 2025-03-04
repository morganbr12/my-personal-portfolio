import { Component } from '@angular/core';

@Component({
    selector: 'app-service',
    imports: [],
    templateUrl: './service.component.html',
    styleUrl: './service.component.scss'
})
export class ServiceComponent {

  services = [
    {
      serviceTitle: "Brand Identity Design",
      serviceDescription: "I break down complex concepts  to create a brand identity that is unique, and intuitive designs to connect billions of people",
    },
    {
      serviceTitle: "Web Design",
      serviceDescription: "I transform complex ideas into user - friendly web designs that engage audience and enhance online experience."
    },
    {
      serviceTitle: "Mobile App Design",
      serviceDescription: "I turn complex concepts into seamless mobile app designs that deliver intuitive and engaging user experience",
    },
    {
      serviceTitle: "UI/UX Design",
      serviceDescription: "I craft intuitive  UI/UX designs that simplify complex interactions and create seamless user experiences.",
    },
    {
      serviceTitle: "Graphic Design",
      serviceDescription: "I apply color theory, design hierarchy, and core principles to create visually compelling and effective designs.",
    }
  ]
}
