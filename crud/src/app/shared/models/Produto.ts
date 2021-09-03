export class Produto {
  nome?:string;
  categoria?:string;
  valor?:number;
  quantidade?:number;
  imagem?: string;
}

export type Produtos = Array<Produto>;
