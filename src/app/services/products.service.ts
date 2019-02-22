import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) { }

    public getProductList() {
        return this.http.get<Product[]>('http://localhost:3000/products');
    }
}
