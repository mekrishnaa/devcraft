import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  budget: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  submitted = false;
  loading = false;

  form: ContactForm = {
    name: '',
    email: '',
    budget: '',
    service: '',
    message: ''
  };

  budgets = ['< $2,000', '$2,000 – $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+'];
  services = ['Frontend Development', 'Backend Development', 'Database Engineering', 'DevOps & Cloud', 'Full-Stack Product', 'Consultation'];

  channels = [
    { icon: 'bx-envelope', label: 'Email', value: 'hello@devcraft.team', color: '#6c63ff' },
    { icon: 'bxl-whatsapp', label: 'WhatsApp', value: '+1 (555) 123-4567', color: '#25d366' },
    { icon: 'bxl-linkedin', label: 'LinkedIn', value: '/company/devcraft', color: '#0a66c2' }
  ];

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
    }, 2000);
  }

  resetForm() {
    this.submitted = false;
    this.form = { name: '', email: '', budget: '', service: '', message: '' };
  }
}
