import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts()
  {
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Product)
  {
    this.productList.push({
      Nome: product.nome || null,
      CPF: product.cpf || null,
      RG: product.rg || null,
      Endereço: product.endereco || null,
      TipodaCasa: product.tipoCasa || null 
    });
  }

  updateProduct(product: Product)
  {
    this.productList.update(product.$key, {
      Nome: product.nome,
      CPF: product.cpf,
      RG: product.rg,
      Endereço: product.endereco,
      TipodaCasa: product.tipoCasa
    });
  }

  deleteProduct($key: string)
  {
    this.productList.remove($key);
  }
}
