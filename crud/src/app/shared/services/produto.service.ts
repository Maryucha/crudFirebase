import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


  constructor(private db: AngularFireDatabase) { }

  iserindoProduto(produto: Produto){
    this.db.list('produtos').push(produto).then((result:any)=>{
      alert('id do produto inserido '+result.key);
    });
  }

  updateProduto(produto: Produto, key: string){
    this.db.list('produtos').update(key,produto).catch((error:any)=>{
      alert('DEU PAU '+error.message);
    });
  }

  list(){
    this.db.list('produtos').snapshotChanges().pipe(
      map(changes =>{
        return changes.map(c => ({ key: c.payload.key, ...c.payload.exportVal() }));
      })
    );
  }

  delete(key: string){
    this.db.object(`contato/${key}`).remove();
  }

}
