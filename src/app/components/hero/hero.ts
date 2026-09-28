import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  words = ['Frontend', 'Backend', 'Database', 'DevOps'];
  currentWord = 0;
  displayWord = '';
  isDeleting = false;
  charIndex = 0;
  private typeTimer: any = null;

  roles = [
    { label: 'Frontend Dev',    color: '#a78bfa' },
    { label: 'Backend Eng.',    color: '#67e8f9' },
    { label: 'DB Specialist',   color: '#f9a8d4' },
    { label: 'DevOps Eng.',     color: '#6ee7b7' }
  ];

  techTicker = ['React', 'Angular', 'Next.js', 'Node.js', 'PostgreSQL',
                'Docker', 'AWS', 'TypeScript', 'Python', 'Redis', 'Kubernetes', 'Go', 'Terraform'];

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit()       { this.typeEffect(); }
  ngAfterViewInit(){ this.initParticles(); }
  ngOnDestroy()    { if (this.typeTimer) clearTimeout(this.typeTimer); }

  typeEffect() {
    const word = this.words[this.currentWord];
    let delay: number;

    if (this.isDeleting) {
      this.charIndex--;
      this.displayWord = word.substring(0, this.charIndex);
      delay = 55;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.currentWord = (this.currentWord + 1) % this.words.length;
        delay = 350;
      }
    } else {
      this.charIndex++;
      this.displayWord = word.substring(0, this.charIndex);
      delay = 110;
      if (this.charIndex === word.length) {
        this.isDeleting = true;
        delay = 1600;
      }
    }

    this.cdr.detectChanges();
    this.typeTimer = setTimeout(() => this.typeEffect(), delay);
  }

  initParticles() {
    this.ngZone.runOutsideAngular(() => {
      const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d')!;
      const resize = () => {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener('resize', resize);

      const colors = ['124,58,237', '6,182,212', '236,72,153'];
      const dots: any[] = Array.from({ length: 65 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.4,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));

      const frame = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach(d => {
          d.x += d.vx; d.y += d.vy;
          if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
          if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${d.color},0.55)`;
          ctx.fill();
        });
        for (let i = 0; i < dots.length; i++) {
          for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < 130) {
              ctx.beginPath();
              ctx.moveTo(dots[i].x, dots[i].y);
              ctx.lineTo(dots[j].x, dots[j].y);
              ctx.strokeStyle = `rgba(124,58,237,${0.1 * (1 - dist / 130)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(frame);
      };
      frame();
    });
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
