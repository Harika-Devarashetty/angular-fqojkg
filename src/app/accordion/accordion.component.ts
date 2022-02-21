import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  opened = false;

  constructor() { }

  ngOnInit() {
  }
  sections = [
    {
      name: 'Section 1'
     
    },
    {
      name: 'Section 2'
    },
    {
      name: 'Section 3'
    },
  ];
}