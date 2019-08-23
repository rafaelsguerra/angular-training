import { Component, OnInit, Input, ViewEncapsulation, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string};
  // It is possible to assign an alias inside the input parenthesis.

  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('OnInit has been called!');
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('AfterContentInite has been called!');
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

}
