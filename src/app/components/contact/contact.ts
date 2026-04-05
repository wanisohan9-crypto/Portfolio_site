import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
    formData = { name: '', email: '', message: '' };

  constructor(private contactService: ContactService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.contactService.sendMessage(this.formData).subscribe({
      next: (response) => alert('Message sent successfully!'),
      error: (error) => alert('Failed to send message. Please try again.')
    });
  }
}
