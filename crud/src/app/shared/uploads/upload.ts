export class Upload {
  key?: string;
  file:File;
  nome: string;
  url:string;
  progress:number;
  dataCriacao: Date = new Date();


  constructor (file: File){
    this.file=file;
  }
}
