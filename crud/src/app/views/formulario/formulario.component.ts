import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  produto!: Produto;

  constructor(
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dbService: DbService
  ) {
    // this.produtoForm = this.formBuilder.group({
    //   idControl: new FormControl(''),
    //   nomeControl: new FormControl(''),
    //   categoriaControl: new FormControl(''),
    //   valorControl: new FormControl(''),
    //   quantidadeControl: new FormControl(''),
    // });
  }

  ngOnInit() {
    // this.produto = new Produto();
    // this.dbService.currentProduto.subscribe(dado => {
    //   if(dado.produto && dado.key){
    //     this.produto = new Produto();
    //     this.produto.id = dado.produto.key;
    //     this.produto.nome = dado.produto.nome;
    //     this.produto.categoria = dado.produto.categoria;
    //     this.produto.valor = dado.produto.valor;
    //     this.produto.quantidade = dado.produto.quantidade;
    //   }
    // })

    this.produtoForm = this.formBuilder.group({
      idControl: new FormControl(''),
      nomeControl: new FormControl(''),
      categoriaControl: new FormControl(''),
      valorControl: new FormControl(''),
      quantidadeControl: new FormControl(''),
    });
  }

  onSubmit() {
    const newProduto = {
      id: this.key,
      nome: this.produtoForm.value.nomeControl,
      categoria: this.produtoForm.value.categoriaControl,
      valor: this.produtoForm.value.valorControl,
      quantidade: this.produtoForm.value.quantidadeControl,
    } as unknown as Produto;
    if (newProduto) {
      this.produtoService.iserindoProduto(newProduto);
      this.snackBar.open('Produto cadastrado com sucesso!', 'X', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      this.limparFormulario();
    }
  }

  limparFormulario() {
    this.produtoForm.reset();
  }
}
