import { ListaItem } from './lista-item.module';




export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor(titulo:string){
        this.titulo = titulo;
        this.terminada = false;
        this.creadaEn = new Date();
        this.items = [];
        this.id = new Date().getTime();
    }
}