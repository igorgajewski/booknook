import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "./components/topbar/topbar.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopbarComponent, SidebarComponent, LoginModalComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'booknook.client';
  sidebarCollapsed = true;
  showLoginModal = false;

  onToggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  toggleLoginModal(): void {
    this.showLoginModal = !this.showLoginModal;
  }

  closeLoginModal(): void {
    this.showLoginModal = false;
  }

  onLoginSuccess(credentials: {username: string, password: string}): void {
    console.log('User credentials:', credentials);
    // Here you could call your authentication service.
    this.closeLoginModal();
  }
}
