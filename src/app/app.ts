import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { StatsComponent } from './components/stats/stats';
import { ServicesComponent } from './components/services/services';
import { TeamComponent } from './components/team/team';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    ServicesComponent,
    TeamComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'DevCraft — Group Portfolio';
}
