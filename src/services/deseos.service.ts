import { Injectable } from "@angular/core";
import { Lista } from "../models";



@Injectable()
export class DeseosService {

    listas: Lista[] = [];

    constructor(){
        // console.log('Servicio de deseos inicializado');
        const lista1 = new Lista( 'Lista1' );
        const lista2 = new Lista( 'Lista2' )

        this.listas.push(lista1, lista2)

        console.log(this.listas);
    }

}