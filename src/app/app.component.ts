import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  counter: number;

  constructor() {
      console.log('constructor');
      this.counter = 1;
  }

  inc(){
      console.log('inc');
      this.counter += 1;
  }

  ngOnInit(){
      console.log('ng on init');
  }

  ngOnDestroy(){
      console.log('ngOnDestroy');
  }

  ngDoCheck(){
      console.log('ngDoCheck');
  }

  ngOnChanges(){
      console.log('ngOnChanges');
  }

  ngAfterContentInit(){
      console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
      console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
      console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
      console.log('ngAfterViewChecked');
  }
}


