import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
      this.produtos = this.produtoService.list();
  }

  deletar(key: string) {
    this.produtoService.delete(key);
  }

  atualizar(produto: Produto, key: string) {
    this.dbService.editandoProduto(produto, key);
  }
}
