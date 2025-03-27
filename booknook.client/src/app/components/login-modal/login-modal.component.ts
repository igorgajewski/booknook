import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  imports: [FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  username = '';
  password = '';

  @Output() closed = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<{username: string, password: string}>();

  close(): void {
    this.closed.emit();
  }

  login(event: Event): void {
    event.preventDefault();
    // Here you would add your login logic
    // For now, we simply emit the credentials and close the modal
    this.loginSuccess.emit({ username: this.username, password: this.password });
    this.close();
  }

}
