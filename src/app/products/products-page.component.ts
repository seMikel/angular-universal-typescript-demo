import { Component, OnDestroy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product.interface';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

const PRODUCTS_STATE_KEY = makeStateKey<Product[]>('products');

@Component({
    selector: 'app-products-page',
    templateUrl: './products-page.component.html',
    styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnDestroy {

    products: Product[];
    user: User;
    private userSub: Subscription;

    constructor(
        productService: ProductsService,
        private userService: UserService,
        private snackBar: MatSnackBar,
        private state: TransferState
    ) {
        if (this.state.hasKey(PRODUCTS_STATE_KEY)) {
            this.products = this.state.get<Product[]>(PRODUCTS_STATE_KEY, []);
        } else {
            productService.getProductList().subscribe(products => {
                this.products = products;
                this.state.set(PRODUCTS_STATE_KEY, this.products);
            });
        }
        this.userSub = userService.user.subscribe(user => this.user = user);
    }

    public ngOnDestroy() {
        this.userSub.unsubscribe();
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
