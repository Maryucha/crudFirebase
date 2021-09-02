import { Component, OnInit } from '@angular/core';
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
  produtos!: Observable<any>;
  produto!: Produto;
  categorias = [
    'Selecione',
    'Eletrônicos',
    'Cama & Banho',
    'Louças',
    'Vestuário',
  ];
  imagens = [
    {
      nome: 'camisa',
      imagem: '../assets/img/produtos/camisa.jpg',
    },
    {
      nome: 'calca',
      imagem: '../assets/img/produtos/calca.jpg',
    },
    {
      nome: 'meia',
      imagem: '../assets/img/produtos/meia.jpg',
    },
    {
      nome: 'note',
      imagem: '../assets/img/produtos/note.jpg',
    },
    {
      nome: 'mouse',
      imagem: '../assets/img/produtos/mouse.jpg',
    },
    {
      nome: 'teclado',
      imagem: '../assets/img/produtos/teclado.jpg',
    },
  ];



  constructor(
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dbService: DbService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.produtos = this.produtoService.getAll();

    this.produto = new Produto();

    this.produtoForm = this.formBuilder.group({
      nomeControl: new FormControl(''),
      categoriaControl: new FormControl(''),
      valorControl: new FormControl(''),
      quantidadeControl: new FormControl(''),
      imagemControl: new FormControl(''),
    });

    this.dbService.currentProduto.subscribe(data =>{
      if(data.produto && data.key){
        this.key = data.key;
        this.produto = new Produto();
        this.produto.nome = data.produto.nome;
        this.produto.categoria = data.produto.categoria;
        this.produto.valor = data.produto.valor;
        this.produto.quantidade = data.produto.quantidade;
        this.produto.imagem = data.produto.imagem;
      }
    })
  }

  salvar() {
    const newProduto = {
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
      this.produtoForm.reset();
      this.router.navigate(['listagem']);
    }
  }
}
