import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private router: Router) { }

  generatedGroups:any = {};
  groupsKeys: string[] = [];

  ngOnInit() {
    console.log("se ha envidado " + history.state.data);
    this.generatedGroups = history.state.data;
    if(this.generatedGroups){
      this.groupsKeys = Object.keys(this.generatedGroups);
    }
  }

}
