import { Component,  Compiler } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'AngularTC';
  constructor(public router: Router, private _compiler: Compiler) { }


  ngOnInit() {
    this._compiler.clearCache();
  }

}
