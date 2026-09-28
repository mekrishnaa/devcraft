import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: string;
  label: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.html',
  styleUrls: ['./stats.scss']
})
export class StatsComponent {
  stats: Stat[] = [
    { value: '50+', label: 'Projects Delivered', icon: 'bx-code-block', color: '#6c63ff' },
    { value: '30+', label: 'Happy Clients', icon: 'bx-happy', color: '#fa709a' },
    { value: '4', label: 'Core Specialists', icon: 'bx-group', color: '#43e97b' },
    { value: '4–5', label: 'Years Experience Each', icon: 'bx-medal', color: '#ffd700' }
  ];

  hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '108,99,255';
  }
}
