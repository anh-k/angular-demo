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
      this.characters = data.sort((a, b) => {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      })
    },
      err => console.error(err)

    )
  }

  addByCharacter = (character: Character): void => {
    this.characterService.addCharacter(character).subscribe(data => {
      this.characterService.getCharacter();
    },
    error => console.error(error))
  }

  updateByCharacter = (character: Character): void => {
    this.characterService.updateCharacter(character).subscribe(data => {
      this.characterService.getCharacter();
    },
    error => console.error(error))
  }

  deleteByCharacter = (character: number): void => {
    this.characterService.deleteCharacter(character).subscribe(data => {
      this.characterService.getCharacter();
    },
      error => console.error(error)
    )
  }

}
