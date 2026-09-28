import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;

  navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'Services', href: 'services' },
    { label: 'Team', href: 'team' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(section: string) {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }
}
