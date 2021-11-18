import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../model/character';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  @Output() addCharacter: EventEmitter<Character> = new EventEmitter<Character>();
  @Output() updateCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    }, (reason) => {

    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

  addByCharacter = (title: string, key: string, name: string, active: boolean) => {
    let character: Character = { title, key, name, active };

    this.addCharacter.emit(character);
    this.isAddDisplay = false;
    this.isAddCharacter = true;
    setTimeout(() => {
      this.isAddCharacter = false
    }, 3000);
  }

  updateByCharacter = (id: string, title: string, key: string, name: string, active: boolean) => {

    let idNumber = Number(id);

    let character: Character = { title, id:idNumber, key, name, active };

    console.log(character)

    this.updateCharacter.emit(character);
  }

  deleteByCharacter = (character: Character) => {
    this.deleteCharacter.emit(character.id);
  }

  displayAddSection(): void {
    this.isAddDisplay = !this.isAddDisplay;
  }

}
