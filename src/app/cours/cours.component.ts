import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  title="";

  cours = [
    {Title:"Cours 1", description:"test de la description du cours", Titu:"Tonio"},
    {Title:"Cours 1", description:"test de la description du cours", Titu:"Tonio"},
    {Title:"Cours 1", description:"test de la description du cours", Titu:"Tonio"},
    {Title:"Cours 1", description:"test de la description du cours", Titu:"Tonio"},
    {Title:"Cours 1", description:"test de la description du cours", Titu:"Tonio"},
    {Title:"Cours 1", description:"test de la description du cours", Titu:"Tonio"},
    {Title:"Cours 1", description:"test de la description du cours", Titu:"Tonio"},
    {Title:"Cours 1", description:"test de la description du cours", Titu:"Tonio"},
    {Title:"Cours 1", description:"test de la description du cours", Titu:"Tonio"},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
