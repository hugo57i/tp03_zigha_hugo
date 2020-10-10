import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  public products: [];
  public showedProducts;
  public categories: string[] = [];
  public types: string[] = [];


  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.showedProducts = data;
      this.products.map((product: any) => {
        if (!this.categories.includes(product.categorie)) {
          this.categories.push(product.categorie);
        }
        if (!this.types.includes(product.type)) {
          this.types.push(product.type);
        }
      });
    });
  }

  public updateProducts(products): void {
    this.showedProducts = products;
  }
}
