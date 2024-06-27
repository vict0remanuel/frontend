import { Product } from '../../../components/product/product-create/product.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../components/product/product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

 navigateToProductCreate(): void {
     this.router.navigate(['/products/create'])
   }

}
