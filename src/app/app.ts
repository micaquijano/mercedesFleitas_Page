import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- 1. IMPORTANTE: Agregar esta línea

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pageMercedesFleitas');

  // El resto de tus signals y funciones de openLegalModal() quedan exactamente igual...
  isModalOpen = signal<boolean>(false);
  modalTitle = signal<string>('');
  modalContent = signal<string>('');

  openLegalModal(type: string): void {
    if (type === 'terminos') {
      this.modalTitle.set('Términos y Condiciones');
      this.modalContent.set('Bienvenido a Mercedes Fleitas Atelier...');
    } else if (type === 'privacidad') {
      this.modalTitle.set('Políticas de Privacidad');
      this.modalContent.set('En Mercedes Fleitas garantizamos la absoluta confidencialidad...');
    } else if (type === 'cuidado') {
      this.modalTitle.set('Cuidado de Prendas');
      this.modalContent.set('Nuestras creaciones incorporan textiles importados...');
    }
    this.isModalOpen.set(true);
  }

  closeLegalModal(): void {
    this.isModalOpen.set(false);
  }
}
