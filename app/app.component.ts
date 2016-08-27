import {Component} from '@angular/core';

@Component({
	selector:'my-app',
	template: 
	`<h1>{{title}}</h1>
	<p>There are {{totalCarParts()}} total in Stock.</p>
	<ul>
	<li *ngFor="let carPart of carParts">
		<h2>{{carPart.name | uppercase}}</h2>
		<p>{{carPart.description}}</p>
		<p>{{carPart.price | currency: 'EUR':true}} in Stock</p>
		<p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
		<p *ngIf="carPart.inStock === 0">Out of Stock</p>
	</li>
	</ul>
	`
})

export class AppComponent {
	title = "Ultra Racing";
	carParts = [{
		"id":1,
		"name": "Super Tires",
		"description": "These tires are very best",
		"inStock": 5,
		"price": 4.99
	},
	{
		"id":2,
		"name": "Reinforced Shocks",
		"description": "Shocks made from kryptonite",
		"inStock": 4,
		"price": 9.99
	},
	{
		"id":3,
		"name": "Padded Seats",
		"description": "Super soft seats  for a smooth ride",
		"inStock": 0,
		"price": 24.99
	}];
	totalCarParts(){
		let sum = 0;
		for (let carPart of this.carParts){
			sum += carPart.inStock;
		}
		return sum;
	}
}