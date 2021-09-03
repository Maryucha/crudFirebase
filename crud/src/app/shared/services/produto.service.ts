import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtosRef!: AngularFireList<Produto[]>;
  produtos!: Observable<any>;

  constructor(private dbService: AngularFireDatabase) {}

  iserindoProduto(produto: Produto) {
    this.dbService
      .list('produtos')
      .push(produto)
      .then((result: any) => {
        console.log(result.key)
        //alert('id do produto inserido ' + result.key);
      });
  }

  updateProduto(produto: Produto, key: string) {
    this.dbService
      .list('produtos')
      .update(key, produto)
      .catch((error: any) => {
        alert('Não atualizou pois: ' + error.message);
      });
  }

  getAll() {
    return this.dbService.list('produtos').snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((c) => ({
            key: c.payload.key,
            ...c.payload.exportVal(),
          }));
        })
      );
  }

  deletar(key: string) {
    this.dbService.object(`produtos/${key}`).remove();
   // this.db.object(`contato/${key}`).remove();
  }
}
