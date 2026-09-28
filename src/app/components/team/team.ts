import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrls: ['./team.scss']
})
export class TeamComponent {
  activeCard: number | null = null;

  members = [
    {
      name: 'Alex Chen', role: 'Frontend Architect',
      tagline: 'Crafting pixel-perfect interfaces that users love at first sight',
      experience: 5, avatar: 'AC',
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
      skills: [
        { name: 'React / Angular', level: 95 },
        { name: 'TypeScript',      level: 92 },
        { name: 'CSS / SCSS',      level: 90 },
        { name: 'Performance',     level: 86 }
      ],
      tools: ['React','Angular','Next.js','Figma','Storybook','Jest'],
      social: { github:'#', linkedin:'#', twitter:'#' }
    },
    {
      name: 'Priya Sharma', role: 'Backend Engineer',
      tagline: 'Building scalable APIs and microservices that never break under load',
      experience: 4, avatar: 'PS',
      color: '#67e8f9',
      gradient: 'linear-gradient(135deg,#06b6d4,#67e8f9)',
      skills: [
        { name: 'Node.js / Python', level: 93 },
        { name: 'REST & GraphQL',   level: 90 },
        { name: 'Microservices',    level: 88 },
        { name: 'Security & Auth',  level: 85 }
      ],
      tools: ['Node.js','Python','FastAPI','Redis','RabbitMQ','Nginx'],
      social: { github:'#', linkedin:'#', twitter:'#' }
    },
    {
      name: 'Marcus Reid', role: 'Database Specialist',
      tagline: 'Designing data systems that are fast, reliable and infinitely scalable',
      experience: 4, avatar: 'MR',
      color: '#f9a8d4',
      gradient: 'linear-gradient(135deg,#ec4899,#f9a8d4)',
      skills: [
        { name: 'PostgreSQL / MySQL',   level: 96 },
        { name: 'MongoDB / Redis',      level: 88 },
        { name: 'Query Optimization',   level: 93 },
        { name: 'Data Modeling',        level: 90 }
      ],
      tools: ['PostgreSQL','MongoDB','Redis','Elasticsearch','Prisma','DBeaver'],
      social: { github:'#', linkedin:'#', twitter:'#' }
    },
    {
      name: 'Nadia Okafor', role: 'DevOps Engineer',
      tagline: 'Automating every step so your team ships faster than ever before',
      experience: 5, avatar: 'NO',
      color: '#6ee7b7',
      gradient: 'linear-gradient(135deg,#10b981,#6ee7b7)',
      skills: [
        { name: 'AWS / GCP / Azure',   level: 94 },
        { name: 'Kubernetes / Docker', level: 92 },
        { name: 'CI/CD Pipelines',     level: 96 },
        { name: 'Terraform / IaC',     level: 88 }
      ],
      tools: ['AWS','Docker','Kubernetes','Terraform','GitHub Actions','Grafana'],
      social: { github:'#', linkedin:'#', twitter:'#' }
    }
  ];

  setActive(i: number | null) { this.activeCard = i; }
}
