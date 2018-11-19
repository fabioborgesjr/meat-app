import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }

  zi = 'padawan';
  ka = {
    finalera: 'zika'
  }

}
