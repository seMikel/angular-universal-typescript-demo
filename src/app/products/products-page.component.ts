import { Component, OnDestroy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product.interface';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interface';
import { Subscription } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { StateService } from '../services/state.service';

const PRODUCTS_STATE_KEY = 'products';

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
        private notifications: NotificationService,
        state: StateService
    ) {
        state.get(PRODUCTS_STATE_KEY, productService.getProductList()).subscribe(products => this.products = products);
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
        this.userService.setUserPurchases(this.user.purchases).subscribe(user => this.notifications.notify(
            `${product.name} added to cart`,
            'OK',
            1000
        ));
    }
}
