import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  public products: [];
  public showSideBar: boolean = true;
  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  public _toggleSidebar(): void {
    this.showSideBar = !this.showSideBar;
  }
}
