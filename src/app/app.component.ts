import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//#region z.1
// export class AppComponent {
// 	title = 'Angulara';
// 	inputTekst = 'Przykładowy tekst';
// 	date = new Date();
// 	liczbaE = Math.E;
// 	osoba = new Osoba('Jan Nowak', 56);
// 	pi = Math.PI;
// 	tab = [2, "string", {a:5}, 20, true];
// }
//  class Osoba {
// 	constructor(public imie: string, public wiek?: number) { }
//  }
//#endregion
//#region z.2
// export class AppComponent {
//   title = 'Dni tygodnia';
//   dniTygodnia = [
//     'poniedziałek',
//     'wtorek',
//     'środa',
//     'czwartek',
//     'piątek',
//     'sobota',
//     'niedziela',
//   ];

//   osoby: Osoba[] = [
//     new Osoba('Patryk', 20, true),
//     new Osoba('Bartek', 10, false),
//     new Osoba('Andrzej', 61, false),
//     new Osoba('Anna', 23, true),
//     new Osoba('Kacper', 25, true),
//   ];

// }
// class Osoba {
//   imie: string;
//   wiek: number;
//   czyStudent: boolean;
//   constructor(imie: string, wiek: number, czyStudent: boolean) {
//     this.imie = imie;
//     this.wiek = wiek;
//     this.czyStudent = czyStudent;
//   }
// }
//#endregion
export class AppComponent {
  title = 'Dni tygodnia';
  dniTygodnia = [
    'poniedziałek',
    'wtorek',
    'środa',
    'czwartek',
    'piątek',
    'sobota',
    'niedziela',
  ];
  osoby: Osoba[] = [
    new Osoba('Patryk', 20, true),
    new Osoba('Bartek', 10, false),
    new Osoba('Andrzej', 61, false),
    new Osoba('Anna', 23, true),
    new Osoba('Kacper', 25, true),
  ];
}

class Osoba {
  imie: string;
  wiek: number;
  czyStudent: boolean;
  constructor(imie: string, wiek: number, czyStudent: boolean) {
    this.imie = imie;
    this.wiek = wiek;
    this.czyStudent = czyStudent;
  }
}
