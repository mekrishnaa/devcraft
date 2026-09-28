import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {
  frontendTags = ['React', 'Angular', 'Next.js', 'TypeScript', 'SCSS', 'Figma'];
  backendTags  = ['Node.js', 'Python', 'Go', 'GraphQL', 'Redis', 'Nginx'];
  dbTags       = ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'];
  devopsTags   = ['AWS', 'Docker', 'K8s', 'Terraform'];

  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
