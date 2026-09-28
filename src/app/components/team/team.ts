import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  experience: number;
  avatar: string;
  color: string;
  gradient: string;
  skills: { name: string; level: number }[];
  tools: string[];
  social: { github: string; linkedin: string; twitter: string };
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrls: ['./team.scss']
})
export class TeamComponent {
  activeCard: number | null = null;

  members: TeamMember[] = [
    {
      name: 'Alex Chen',
      role: 'Frontend Architect',
      tagline: 'Crafting pixel-perfect interfaces that users love',
      experience: 5,
      avatar: 'AC',
      color: '#6c63ff',
      gradient: 'linear-gradient(135deg, #6c63ff, #8b85ff)',
      skills: [
        { name: 'React / Angular', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'CSS / SCSS', level: 90 },
        { name: 'Performance Opt.', level: 85 },
      ],
      tools: ['React', 'Angular', 'Next.js', 'Figma', 'Storybook', 'Jest'],
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Priya Sharma',
      role: 'Backend Engineer',
      tagline: 'Building scalable APIs and microservices at speed',
      experience: 4,
      avatar: 'PS',
      color: '#fa709a',
      gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
      skills: [
        { name: 'Node.js / Python', level: 93 },
        { name: 'REST & GraphQL', level: 90 },
        { name: 'Microservices', level: 88 },
        { name: 'Security & Auth', level: 85 },
      ],
      tools: ['Node.js', 'Python', 'FastAPI', 'Redis', 'RabbitMQ', 'Nginx'],
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Marcus Reid',
      role: 'Database Specialist',
      tagline: 'Designing data systems that never miss a beat',
      experience: 4,
      avatar: 'MR',
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
      skills: [
        { name: 'PostgreSQL / MySQL', level: 96 },
        { name: 'MongoDB / Redis', level: 88 },
        { name: 'Query Optimization', level: 92 },
        { name: 'Data Modeling', level: 90 },
      ],
      tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Prisma', 'DBeaver'],
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Nadia Okafor',
      role: 'DevOps Engineer',
      tagline: 'Automating everything so you ship faster',
      experience: 5,
      avatar: 'NO',
      color: '#ffd700',
      gradient: 'linear-gradient(135deg, #ffd700, #ff8c00)',
      skills: [
        { name: 'AWS / GCP / Azure', level: 94 },
        { name: 'Kubernetes / Docker', level: 92 },
        { name: 'CI/CD Pipelines', level: 95 },
        { name: 'Terraform / IaC', level: 88 },
      ],
      tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
      social: { github: '#', linkedin: '#', twitter: '#' }
    }
  ];

  setActive(i: number | null) {
    this.activeCard = i;
  }

  getTagBorder(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return 'rgba(108,99,255,0.3)';
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgba(${r},${g},${b},0.3)`;
  }
}
