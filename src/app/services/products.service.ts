import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) { }

    public getProductList() {
        return this.http.get<Product[]>(`${environment.apiBaseURL}/products`);
    }
}
