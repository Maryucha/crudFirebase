import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/shared/models/Produto';
import { DbService } from 'src/app/shared/services/db.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
