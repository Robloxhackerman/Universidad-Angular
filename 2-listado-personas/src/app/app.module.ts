import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
    declarations: [
        AppComponent,
        PersonaComponent,
        FormularioComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    exports: [
        FormularioComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
