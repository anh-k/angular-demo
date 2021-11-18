import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  isAddDisplay: boolean = false;
  isAddCharacter: boolean = false;
  @Input() characters: Character[] = [];
  @Output() deleteCharacter: EventEmitter<number> = new EventEmitter<number>();
  @Output() newCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  constructor() { }

  ngOnInit(): void {
  }

  addByCharacter = (title: string, key: string, name: string, active: boolean) => {
    let character: Character = {title, key, name, active};

    this.newCharacter.emit(character);
    this.isAddDisplay = false;
    this.isAddCharacter = true;
  }

  deleteByCharacter = (character: Character) => {
    this.deleteCharacter.emit(character.id);
  }

  displayAddSection(): void {
    this.isAddDisplay = !this.isAddDisplay;
  }

}
