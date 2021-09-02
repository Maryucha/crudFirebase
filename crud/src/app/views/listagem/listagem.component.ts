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

  constructor(
    private produtoService: ProdutoService,
    private dbService: DbService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.produtos = this.produtoService.list();
  }

  deletar(key: string) {
    this.produtoService.delete(key);
    this.snackBar.open('Produto Deletado com sucesso!', 'X', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  atualizar(produto: Produto, key: string) {
    this.dbService.editandoProduto(produto, key);
    this.snackBar.open('Produto atualizado com sucesso!', 'X', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
    this.router.navigate([`novocadastro/${key}`]);
  }
}
