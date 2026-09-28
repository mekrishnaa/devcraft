import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = {
    services: ['Frontend Dev', 'Backend Dev', 'Database Eng.', 'DevOps & Cloud', 'Consultation'],
    company: ['About Us', 'Our Process', 'Careers', 'Blog', 'Privacy Policy'],
    social: [
      { icon: 'bxl-github', href: '#', label: 'GitHub' },
      { icon: 'bxl-linkedin', href: '#', label: 'LinkedIn' },
      { icon: 'bxl-twitter', href: '#', label: 'Twitter' },
      { icon: 'bxl-dribbble', href: '#', label: 'Dribbble' }
    ]
  };

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
