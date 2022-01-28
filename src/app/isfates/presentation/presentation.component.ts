import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showExams(): void {
    this.router.navigate(["/partiels"]);
  }
}
