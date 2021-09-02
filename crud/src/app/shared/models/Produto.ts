export class Produto {
  key?: string;
  nome?:string;
  categoria?:string;
  valor?:number;
  quantidade?:number;
  imagem?: string;
}

export type Produtos = Array<Produto>;
