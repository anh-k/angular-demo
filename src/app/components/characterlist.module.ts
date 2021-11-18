import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
    declarations: [
        CharacterPageComponent,
        CharacterListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CharacterPageComponent
    ]
})
export class CharacterListModule { }