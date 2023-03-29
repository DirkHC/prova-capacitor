import { Component } from '@angular/core';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
    sendOrder?: boolean;
    discardOrder?: boolean;

    sendOrderClicked(): void {
        this.sendOrder = true;
        this.discardOrder = false;
    }

    discardOrderClicked(): void {
        this.sendOrder = false;
        this.discardOrder = true;
    }
}
