import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {
  activeService = 0;

  services: Service[] = [
    {
      icon: 'bx-palette',
      title: 'Frontend Development',
      description: 'Pixel-perfect, blazing-fast web interfaces with modern frameworks. We turn designs into interactive experiences users love.',
      features: ['React / Angular / Vue.js', 'Responsive & Mobile-First', 'Performance Optimization', 'UI/UX Implementation', 'Progressive Web Apps', 'Animation & Micro-interactions'],
      color: '#6c63ff',
      gradient: 'linear-gradient(135deg, #6c63ff, #8b85ff)'
    },
    {
      icon: 'bx-server',
      title: 'Backend Development',
      description: 'Scalable, secure server-side architectures and APIs. From monoliths to microservices, we build the engine that powers your product.',
      features: ['Node.js / Python / Go', 'RESTful & GraphQL APIs', 'Microservices Architecture', 'Authentication & Security', 'Third-party Integrations', 'Real-time Systems (WebSocket)'],
      color: '#fa709a',
      gradient: 'linear-gradient(135deg, #fa709a, #fee140)'
    },
    {
      icon: 'bx-data',
      title: 'Database Engineering',
      description: 'Robust data modeling, optimization and management. We design databases that are fast, reliable and scale with your business.',
      features: ['PostgreSQL / MySQL', 'MongoDB / Redis', 'Database Design & Modeling', 'Query Optimization', 'Data Migration', 'Backup & Recovery Strategies'],
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)'
    },
    {
      icon: 'bx-cloud',
      title: 'DevOps & Cloud',
      description: 'End-to-end CI/CD pipelines, cloud infrastructure, and deployment automation. We make shipping software fast, reliable and painless.',
      features: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security & Compliance'],
      color: '#ffd700',
      gradient: 'linear-gradient(135deg, #ffd700, #ff8c00)'
    }
  ];

  setActive(index: number) {
    this.activeService = index;
  }

  scroll(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
