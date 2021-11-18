import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {
  characters: Array<Character> = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacter();
    this.getCharacters();
  }

  ngOnDestroy(): void {
  }

  getCharacters = (): void => {
    this.characterService.characterStream.subscribe(data => {
      this.characters = data
    },
      err => console.error(err)

    )
  }

  deleteByCharacter = (characters: number): void => {
    this.characterService.deleteCharacter(characters).subscribe(data => {
      this.characterService.getCharacter();
    },
      error => console.error(error)
    )
  }

}
