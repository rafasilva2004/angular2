import {NgModule} from '@angular/core';
import {BrowserModule} from  '@angular/platform-browser';
import {AppComponent} from "./app.components";
import {ContatosModule} from "./contatos/contatos.module";
import {AppRoutingModule} from "./contatos/app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule, InMemoryDbService} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {DialogService} from "./contatos/dialog.service";

@NgModule({
 imports:[AppRoutingModule,
          BrowserModule,
          ContatosModule,
          HttpModule,
          InMemoryWebApiModule.forRoot(InMemoryDataService)
 ],
 declarations: [AppComponent],
    providers: [
        DialogService
    ],
 bootstrap: [AppComponent]
})
export class AppModule{

}