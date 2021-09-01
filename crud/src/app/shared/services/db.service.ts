import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private produtoSource = new BehaviorSubject<any>({ produto: null, key: ''});
  currentProduto = this.produtoSource.asObservable();

  constructor() { }

  editandoProduto(produto: Produto, key: string){
    this.produtoSource.next({produto: produto, key: key});
  }
}
