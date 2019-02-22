import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product.interface';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-products-page',
    templateUrl: './products-page.component.html',
    styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

    products: Product[];
    user: User;

    constructor(productService: ProductsService, private userService: UserService, private snackBar: MatSnackBar) {
        productService.getProductList().subscribe(products => this.products = products);
        userService.user.subscribe(user => this.user = user);
    }

    public addToCart(product: Product) {
        const existingPurchase = this.user.purchases.find(purchase => purchase.product._id === product._id);
        if (existingPurchase) {
            existingPurchase.amount++;
        } else {
            this.user.purchases.push({ product, amount: 1 });
        }
        this.userService.setUserPurchases(this.user.purchases).subscribe(user => this.snackBar.open(
            `${product.name} added to cart`,
            'OK',
            { duration: 1000, }
        ));
    }
}
