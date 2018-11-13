import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { Lista } from "../../models";
import { NavParams } from "ionic-angular";
import { ListaItem } from '../../models';



@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarPage {
    lista: Lista
    nombreItem: string = '';
    
    
    constructor(public deseosService: DeseosService,
                private navParams: NavParams ){
        
        // console.log(this.navParams);
        const titulo = this.navParams.get('titulo');
        this.lista = new Lista(titulo);
    }

    agregarItem(){
        if(this.nombreItem.length === 0) {
            return;
        }
        const nuevoItem = new ListaItem(this.nombreItem); 
        this.lista.items.push(nuevoItem)
        console.log(this.lista.items);
        this.nombreItem= '';
    }

    actualizarTarea(item: ListaItem){
        item.completado = !item.completado
    }

    
}