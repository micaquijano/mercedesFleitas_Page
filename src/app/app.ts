import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pageMercedesFleitas');

  isModalOpen = signal<boolean>(false);
  modalTitle = signal<string>('');
  modalContent = signal<string>('');

  openLegalModal(type: string): void {
    if (type === 'terminos') {
      this.modalTitle.set('TÉRMINOS Y CONDICIONES DE USO Y VENTA');
      this.modalContent.set(
        'Bienvenido al sitio web de Mercedes Fleitas. Al acceder, navegar o realizar una compra en nuestro Sitio, usted acepta cumplir y estar sujeto a los siguientes Términos y Condiciones. Le recomendamos leerlos atentamente antes de realizar cualquier pedido.\n\n' +
        '1. Generalidades y Propiedad Intelectual\nEste Sitio es operado por Mercedes Fleitas Atelier. Todos los diseños, fotografías, textos, logotipos y material gráfico que aparecen en este Sitio son propiedad exclusiva de la marca y están protegidos por las leyes de propiedad intelectual internacionales. Queda prohibida su reproducción total o parcial sin autorización expresa.\n\n' +
        '2. Proceso de Pedido y Confección (Alta Costura)\nDebido a la naturaleza artesanal y exclusiva de nuestras prendas, los pedidos bajo diseño o a medida comenzarán su confección únicamente una vez confirmado el pago y habiendo recibido las medidas exactas. El cliente es enteramente responsable de la exactitud de las medidas proporcionadas.\n\n' +
        '3. Precios y Formas de Pago\nTodos los precios están expresados en pesos argentinos e incluyen los impuestos aplicables. Los gastos de envío no están incluidos en el precio base del vestido y se calcularán al finalizar la compra.\n\n' +
        '4. Plazos de Entrega y Envíos\nCada pieza de alta costura requiere un tiempo de producción estimado de aproximadamente 4 a 8 semanas, dependiendo de la complejidad del diseño. No nos hacemos responsables por retrasos causados por empresas de mensajería externas.\n\n' +
        '5. Política de Cancelaciones, Devoluciones y Reembolsos\nPor la naturaleza personalizada de la alta costura, los vestidos a medida NO permiten cambios, devoluciones ni reembolsos bajo ninguna circunstancia, al ser piezas únicas creadas para un cliente específico. Las prendas listas para llevar (Ready-to-Wear) sí permiten cambios dentro de los 14 días de corrido, siempre que conserven etiquetas y empaque original intacto.\n\n' +
        '6. Modificaciones y Ajustes Post-Entrega\nSi el error de confección es del atelier, asumiremos los costos de reparación y envío. Si el vestido coincide con las medidas enviadas pero el cliente varió de peso o prefiere otra silueta, dichos costos correrán por su cuenta.\n\n' +
        '7. Legislación Aplicable\nEstos términos se rigen e interpretan de acuerdo con las leyes de la República Argentina y cualquier disputa se someterá a los tribunales competentes de Buenos Aires.'
      );
    } else if (type === 'privacidad') {
      this.modalTitle.set('Políticas de Privacidad');
      this.modalContent.set('En Mercedes Fleitas garantizamos la absoluta confidencialidad y el resguardo estricto de todos los datos personales e información de medidas provistas por nuestras clientas...');
    } else if (type === 'cuidado') {
      this.modalTitle.set('Cuidado de Prendas');
      this.modalContent.set('Nuestras creaciones incorporan textiles importados, pedrería fina y encajes artesanales. Se recomienda estrictamente la limpieza a seco en tintorerías especializadas y evitar el roce con superficies rugosas para preservar el hilado.');
    }
    this.isModalOpen.set(true);
  }

  closeLegalModal(): void {
    this.isModalOpen.set(false);
  }
}
