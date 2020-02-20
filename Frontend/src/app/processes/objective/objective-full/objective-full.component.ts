import { Component, OnInit } from '@angular/core';
import { ObjectiveService } from '../objective.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Objective } from '../objective.model';

@Component({
  selector: 'app-objective-full',
  templateUrl: './objective-full.component.html',
  styleUrls: ['./objective-full.component.css']
})
export class ObjectiveFullComponent implements OnInit {
  subscriptions: Subscription[] = [];
  objective: Objective;

  constructor(
    private objectiveServ: ObjectiveService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.subscribe((params: Params) => {
        let search = params["department"] + "&" + params["objective"];
        this.objectiveServ.fetchObjectiveByName(search).subscribe(objective =>{
          this.objective = objective;
        })
      })
    ) 

  }

}