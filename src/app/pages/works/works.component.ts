import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {

  isWorkSelected: number = 0;

  workTypes = [
    "All",
    "UI/UX",
    "Branding",
    "Graphic Design",
  ];

  works = [
    {
      workType: "UI/UX",
      workTitle: "Chat App",
      workThumbnail: "assets/work/chatapp.svg",
      workDescription: "",
    },
    {
      workType: "Branding",
      workTitle: "innovo food",
      workThumbnail: "assets/work/delivery-food.png",
      workDescription: "",
    },
    {
      workType: "UI/UX",
      workTitle: "delivery",
      workThumbnail: "assets/work/deliver.png",
      workDescription: "",
    },
    {
      workType: "Graphic Design",
      workTitle: "ercommerce",
      workThumbnail: "assets/work/ecommerce.png",
      workDescription: "",
    },
    {
      workType: "Branding",
      workTitle: "payment",
      workThumbnail: "assets/work/payment.png",
      workDescription: "",
    },
    {
      workType: "UI/UX",
      workTitle: "runners",
      workThumbnail: "assets/work/runners.png",
      workDescription: "",
    },
  ];

  onWorkTypeSelected(type: String, index: number): void {
    this.isWorkSelected = index;
  }
}
