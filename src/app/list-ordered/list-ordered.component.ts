import { Component, OnInit } from '@angular/core';

interface Pizza {
    name: string;
    price: number;
    amount: number;
    totalPrice: number;
}

@Component({
    selector: 'app-list-ordered',
    templateUrl: './list-ordered.component.html',
    styleUrls: ['./list-ordered.component.scss'],
})
export class ListOrderedComponent implements OnInit {
    readonly pizzas: Pizza[] = [
        { name: 'Margerita', price: 6.9, amount: 1, totalPrice: NaN },
        { name: 'Funghi', price: 7.9, amount: 2, totalPrice: NaN },
        { name: 'Regina', price: 8.5, amount: 1, totalPrice: NaN },
        { name: 'Romana', price: 8.5, amount: 3, totalPrice: NaN },
    ];

    ngOnInit() {
        this.pizzas.forEach(pizza => {
            this.setTotalPrice(pizza);
        });
    }

    setTotalPrice(pizza: Pizza): void {
        pizza.totalPrice = pizza.amount * pizza.price;
        const pizzaIndex = this.pizzas.indexOf(pizza);
        this.pizzas[pizzaIndex].totalPrice = pizza.amount * pizza.price;
    }

    remove(pizza: Pizza): void {
        const pizzaIndex = this.pizzas.indexOf(pizza);
        this.pizzas.splice(pizzaIndex, 1);
    }
}
