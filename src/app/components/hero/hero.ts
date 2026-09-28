import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {
  words = ['Frontend', 'Backend', 'Database', 'DevOps'];
  currentWord = 0;
  displayWord = '';
  isDeleting = false;
  charIndex = 0;

  techStack = [
    { icon: 'bxl-react', label: 'React' },
    { icon: 'bxl-angular', label: 'Angular' },
    { icon: 'bxl-nodejs', label: 'Node.js' },
    { icon: 'bxl-postgresql', label: 'PostgreSQL' },
    { icon: 'bxl-docker', label: 'Docker' },
    { icon: 'bxl-aws', label: 'AWS' },
    { icon: 'bxl-typescript', label: 'TypeScript' },
    { icon: 'bxl-python', label: 'Python' },
  ];

  ngOnInit() {
    this.typeEffect();
    this.animateParticles();
  }

  typeEffect() {
    const word = this.words[this.currentWord];
    if (this.isDeleting) {
      this.displayWord = word.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.displayWord = word.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let delay = this.isDeleting ? 60 : 120;

    if (!this.isDeleting && this.charIndex === word.length) {
      delay = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentWord = (this.currentWord + 1) % this.words.length;
      delay = 400;
    }

    setTimeout(() => this.typeEffect(), delay);
  }

  animateParticles() {
    // Canvas particle animation
    setTimeout(() => {
      const canvas = document.getElementById('particles') as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d')!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: any[] = [];
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
          color: Math.random() > 0.5 ? '108,99,255' : '250,112,154'
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
          ctx.fill();
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(108,99,255,${0.15 * (1 - dist/100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(animate);
      };
      animate();

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    }, 100);
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
