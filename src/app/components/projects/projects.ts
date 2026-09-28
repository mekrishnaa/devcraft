import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  color: string;
  gradient: string;
  icon: string;
  metrics: { label: string; value: string }[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  activeFilter = 'All';
  filters = ['All', 'Full-Stack', 'Frontend', 'Backend', 'DevOps'];

  projects: Project[] = [
    {
      title: 'FinFlow Dashboard',
      description: 'A real-time financial analytics dashboard with live data streams, beautiful charts, and predictive insights for fintech clients.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'AWS'],
      category: 'Full-Stack',
      color: '#6c63ff',
      gradient: 'linear-gradient(135deg, #6c63ff, #8b85ff)',
      icon: 'bx-line-chart',
      metrics: [{ label: 'Users', value: '10K+' }, { label: 'Uptime', value: '99.9%' }, { label: 'Perf', value: 'A+' }],
      link: '#'
    },
    {
      title: 'MedSync Platform',
      description: 'Healthcare appointment booking and patient management platform with HIPAA compliance, real-time notifications, and telemedicine.',
      tags: ['Angular', 'Python', 'MongoDB', 'Docker', 'GCP'],
      category: 'Full-Stack',
      color: '#fa709a',
      gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
      icon: 'bx-plus-medical',
      metrics: [{ label: 'Hospitals', value: '25+' }, { label: 'Daily Appts', value: '2K+' }, { label: 'Rating', value: '4.9★' }],
      link: '#'
    },
    {
      title: 'ShopNest E-Commerce',
      description: 'High-performance e-commerce storefront with SSR, optimized checkout flow, inventory management, and multi-vendor support.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Figma'],
      category: 'Frontend',
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
      icon: 'bx-store-alt',
      metrics: [{ label: 'Conv. Rate', value: '+34%' }, { label: 'Speed', value: '98/100' }, { label: 'Sales', value: '$2M+' }],
      link: '#'
    },
    {
      title: 'DataPulse API Engine',
      description: 'Ultra-fast microservices API gateway handling millions of requests per day with rate limiting, caching, and observability.',
      tags: ['Go', 'Redis', 'Kafka', 'gRPC', 'Kubernetes'],
      category: 'Backend',
      color: '#ffd700',
      gradient: 'linear-gradient(135deg, #ffd700, #ff8c00)',
      icon: 'bx-server',
      metrics: [{ label: 'Req/sec', value: '500K+' }, { label: 'Latency', value: '<5ms' }, { label: 'SLAs', value: '100%' }],
      link: '#'
    },
    {
      title: 'CloudOps Infra Suite',
      description: 'Complete cloud infrastructure automation with Terraform, zero-downtime deployments, autoscaling, and 360° monitoring.',
      tags: ['Terraform', 'AWS', 'K8s', 'Prometheus', 'ArgoCD'],
      category: 'DevOps',
      color: '#38f9d7',
      gradient: 'linear-gradient(135deg, #38f9d7, #4facfe)',
      icon: 'bx-cloud',
      metrics: [{ label: 'Cost Saved', value: '40%' }, { label: 'Deploy Time', value: '-80%' }, { label: 'Services', value: '60+' }],
      link: '#'
    },
    {
      title: 'LearnSphere LMS',
      description: 'Full-featured learning management system with video streaming, progress tracking, quizzes, certificates, and payment integration.',
      tags: ['Vue.js', 'Node.js', 'MySQL', 'Stripe', 'S3'],
      category: 'Full-Stack',
      color: '#c792ea',
      gradient: 'linear-gradient(135deg, #c792ea, #9c27b0)',
      icon: 'bx-book-open',
      metrics: [{ label: 'Students', value: '50K+' }, { label: 'Courses', value: '200+' }, { label: 'Revenue', value: '$1M+' }],
      link: '#'
    }
  ];

  get filteredProjects() {
    if (this.activeFilter === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(f: string) { this.activeFilter = f; }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
