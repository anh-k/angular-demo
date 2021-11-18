import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  isAddDisplay : boolean = false;
  @Input() characters: Character[] = [];
  @Output() deleteCharacter:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }
  
  deleteByCharacter = (characters: Character) => {
    this.deleteCharacter.emit(characters.id);
  }

  displayAddSection() : void {
    this.isAddDisplay = !this.isAddDisplay;
  }

}
