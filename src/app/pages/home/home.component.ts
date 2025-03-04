import { Component } from '@angular/core';
import { ServiceComponent } from "../service/service.component";
import { WorksComponent } from "../works/works.component";
import { ExperienceComponent } from "../experience/experience.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactsComponent } from "../contacts/contacts.component";

@Component({
    selector: 'app-home',
    imports: [ServiceComponent, WorksComponent, ExperienceComponent, SkillsComponent, ContactsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
