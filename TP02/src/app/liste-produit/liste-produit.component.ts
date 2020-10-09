import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  public minValue = 0;
  public maxValue = 500;
  public options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Prix min.:</b> €' + value;
        case LabelType.High:
          return '<b>Prix max.:</b> €' + value;
        default:
          return value + '€';
      }
    }
  };

  public products: [];
  public showedProducts;
  public categories: string[] = [];
  public types: string[] = [];
  public typeSelected: string = "Aucune";
  public categorieSelected: string = "Aucune";

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

  public onCategoryChanged(event: any): void {
    this.categorieSelected = event.target.value;
    if (event.target.value === 'Aucune') {
       if (this.typeSelected === 'Aucune') {
        this.showedProducts = this.products;
      } else {
        this.showedProducts = this.products.filter((product: any) => {
          return product.type === this.typeSelected;
        });
      }
    } else {
      if (this.typeSelected === 'Aucune') {
        this.showedProducts = this.products.filter((product: any) => {
          return product.categorie === event.target.value;
        });
      } else {
        this.showedProducts = this.products.filter((product: any) => {
          return product.categorie === event.target.value && product.type === this.typeSelected;
        });
      }
    }
  }

  public onTypeChanged(event: any): void {
    this.typeSelected = event.target.value;
    if (event.target.value === 'Aucune') {
       if (this.categorieSelected === 'Aucune') {
        this.showedProducts = this.products;
      } else {
        this.showedProducts = this.products.filter((product: any) => {
          return product.categorie === this.categorieSelected;
        });
      }
    } else {
      if (this.categorieSelected === 'Aucune') {
        this.showedProducts = this.products.filter((product: any) => {
          return product.type === event.target.value;
        });
      } else {
        this.showedProducts = this.products.filter((product: any) => {
          return product.type === event.target.value && product.categorie === this.categorieSelected;
        });
      }
    }
  }

  public checkProduct(product: any): void {

  }


}
