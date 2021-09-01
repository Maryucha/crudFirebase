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
  // produto!: Produto;
  key: string = '';

  constructor(
    private produtoService: ProdutoService,
    private dbService: DbService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
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
