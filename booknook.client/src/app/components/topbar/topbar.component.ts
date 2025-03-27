import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
@Output() toggleSidebar = new EventEmitter<void>();
@Output() loginClick = new EventEmitter<void>();
@Input() modalOpen = false;

onToggleSidebar(): void {
  this.toggleSidebar.emit();
}

onLoginClick(): void {
  this.loginClick.emit();
}
}
