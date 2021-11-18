import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../model/character';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    characterStream = new BehaviorSubject<Character[]>([]);

    constructor(private http: HttpClient) { }

    getCharacter = (): void => {
        this.http.get<Character[]>(environment.URL).subscribe(
            data => {
                this.characterStream.next(data)
            })
    }
}
