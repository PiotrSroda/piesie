import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PiesieService } from '../piesie.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-piesie',
  templateUrl: './piesie.component.html',
  styleUrls: ['./piesie.component.css']
})
export class PiesieComponent {
  constructor (
    private piesieService: PiesieService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
    ){
      router.events.subscribe((val) => this.getPiesieZdjecia())
    }

  // @Input() dashboard?: DashboardComponent;
  // ngOnInit(): void {    
  //   this.getPiesieZdjecia();
  // }
  
  tablicaPieskow?: any[];

  getPiesieZdjecia(): void {
    let rasa = String(this.route.snapshot.paramMap.get('rasa'));
    this.piesieService.getPiesie(rasa)
    .subscribe(data => this.wezZdjeciaPieskow(data));    
  }

  wezZdjeciaPieskow(data: any): any{
    let tempPieski = data.message;    
    this.tablicaPieskow = tempPieski;
  }

}
