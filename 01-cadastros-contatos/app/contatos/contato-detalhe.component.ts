import {Component, OnInit} from "@angular/core";
import {ContatoService} from "./contato.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {Contato} from "./contato.model";


@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: './contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit{

    contato: Contato;

    private isNovoContato: boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ){}
    ngOnInit(): void {
        this.contato = new Contato(0,'','','');
        this.route.params.forEach((params: Params) =>{
            let id: number = +params['id'];
            if(id){
                this.isNovoContato = false;
                this.contatoService.getContato(id)
                    .then((contato:Contato)=>{
                        console.log(contato);
                        this.contato = contato;
                });
            }
        });
    }
    getFormGroupClass(isValid: boolean, isPristine: boolean):{}{
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        }
    }
    getFormControlClass(isValid: boolean, isPristine: boolean):{}{
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        }
    }

    onSubmit():void{
        let promise;
        if(this.isNovoContato){
            console.log('Novo Contato' + this.contato);
            promise = this.contatoService.create(this.contato);
        }else{
            console.log('Alterar Contato' + this.contato);
            promise = this.contatoService.update(this.contato);
        }

        promise.then(contato => this.goBack());
    }

    goBack(): void{
        this.location.back();
    }
}