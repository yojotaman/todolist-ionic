import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { Lista } from "../../models";
import { NavController, AlertController } from "ionic-angular";
import { AgregarPage } from '../agregar/agregar.component';



@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage {
    constructor(public deseosService: DeseosService,
                private navCtrl: NavController,
                public alertCtrl: AlertController ){
        
    }

    listaSeleccionada(lista: Lista){
        console.log(lista);
    }

    agregarLista(){
        // 
        const prompt = this.alertCtrl.create({
            title: 'Nueva Lista',
            message: "Nombre de la lista que va a crear",
            inputs: [
              {
                name: 'titulo',
                placeholder: 'Título de la lista'
              },
            ],
            buttons: [
              {
                text: 'Cancelar',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Guardar',
                handler: data => {

                    if( data.titulo.length === 0) {
                        return;
                    }
                    this.navCtrl.push( AgregarPage, {
                        titulo: data.titulo
                    })
                  
                }
              }
            ]
          });

          prompt.present();
    }

    
}

