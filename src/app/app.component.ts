import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirst-app';
  array:any=[{name:"A",id:""},{name:"B",id:"1"},{name:"C",id:"2"}];
  array1:any=[];
  data="cmk";
  home;
  @Input() name:TemplateRef<any>;
  @Input() name1:TemplateRef<any>;
}
