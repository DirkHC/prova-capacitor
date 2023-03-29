import { Component } from '@angular/core';

@Component({
    selector: 'app-pizza-diameter',
    templateUrl: './pizza-diameter.component.html',
    styleUrls: ['./pizza-diameter.component.scss'],
})
export class PizzaDiameterComponent {
    formatDiameter(value: string): string {
        return `${value} cm`;
    }
}
