export interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    prioridade : number;
    status : number;
    dataCriacao : Date;
    dataConclusao? : Date;
    prazo : Date;
  }