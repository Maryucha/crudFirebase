import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/shared/models/Produto';
import { DbService } from 'src/app/shared/services/db.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  produtos!: Observable<any>;
  listaProdutos!: AngularFireList<Produto[]>;
  produtoForm!: FormGroup;
  produto!: Produto;
  key: string = '';
  isSelected=false;

  constructor(
    private produtoService: ProdutoService,
    private dbService: DbService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.produtos = this.produtoService.getAll();

      this.produto = new Produto();
      this.dbService.currentProduto.subscribe(data =>{
        if(data.produto && data.key){
          this.produto = new Produto();
          this.produto.nome = data.produto.nome;
          this.produto.categoria = data.produto.categoria;
          this.produto.valor = data.produto.valor;
          this.produto.quantidade = data.produto.quantidade;
          this.produto.imagem = data.produto.imagem;
        }
      })
  }

  delete(key: string) {
    this.produtoService.deletar(key);
    this.snackBar.open('Produto Deletado com sucesso!', 'X', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  atualizar(produto: Produto, key: string) {
    //this.router.navigate([`edit/${key}`]);
    this.isSelected=true;
    this.dbService.editandoProduto(produto, key);

  }

  onSubmit(){

    if(this.key){

      this.produtoService.updateProduto(this.produto,this.key);
      this.snackBar.open('Produto atualizado com sucesso!', 'X', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }else{
      this.produtoService.iserindoProduto(this.produto);
    }
    this.produto = new Produto();
    this.isSelected = false;
  }
}
