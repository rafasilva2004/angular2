import {NgModule} from '@angular/core';
import {ContatosListaComponent} from "./contatos-lista.components";
import {CommonModule} from '@angular/common';
import {ContatoRoutingModule} from "./contato-routing.module";
import {ContatoDetalheComponent} from "./contato-detalhe.component";
import {ContatoService} from "./contato.service";
import {FormsModule} from "@angular/forms";
import {ContatoBuscaComponent} from "./contato-busca.component";

@NgModule({

    imports:[
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations: [
        ContatosListaComponent,
        ContatoDetalheComponent,
        ContatoBuscaComponent
    ],
    exports:[
        ContatosListaComponent,
        ContatoBuscaComponent
    ],
    providers:[
        ContatoService
    ]
})
export class ContatosModule{

}