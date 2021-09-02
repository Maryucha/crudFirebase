import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Produto } from 'src/app/shared/models/Produto';
import { DbService } from 'src/app/shared/services/db.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  produtoForm!: FormGroup;
  key: string = '';
  categorias = [
    'Selecione',
    'Eletrônicos',
    'Cama & Banho',
    'Louças',
    'Vestuário'
  ];
  produtos!: Observable<any>;
  listaProdutos!: AngularFireList<Produto[]>;

  constructor(
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dbService: DbService,
    private router: Router
  ) {}

  async ngOnInit() {

  //  this.produtos = this.produtoService.list();

    this.produtoForm = this.formBuilder.group({
      idControl: new FormControl(''),
      nomeControl: new FormControl(''),
      categoriaControl: new FormControl(''),
      valorControl: new FormControl(''),
      quantidadeControl: new FormControl(''),
      imagemControl: new FormControl(''),
  })
}

  // buscar(){
  //   this.produtos.forEach(produto => {
  //       this.produtoForm.get('keyControl')!.setValue(produto.key);
  //       this.produtoForm.get('nomeControl')!.setValue(produto.nome);
  //       this.produtoForm.get('valorControl')!.setValue(produto.valor);
  //       this.produtoForm.get('categoriaControl')!.setValue(produto.categoria);
  //       this.produtoForm.get('quantidadeControl')!.setValue(produto.quantidade);
  //   })
  // }

  salvar() {
    const newProduto = {
      id: this.key,
      nome: this.produtoForm.value.nomeControl,
      categoria: this.produtoForm.value.categoriaControl,
      valor: this.produtoForm.value.valorControl,
      quantidade: this.produtoForm.value.quantidadeControl,
      imagem: this.produtoForm.value.imagemControl,
    } as unknown as Produto;
    if (newProduto) {
      this.produtoService.iserindoProduto(newProduto);
      this.snackBar.open('Produto cadastrado com sucesso!', 'X', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      this.limparFormulario();
      this.router.navigate(['listagem']);
    }
  }

  limparFormulario() {
    this.produtoForm.reset();
  }
}
