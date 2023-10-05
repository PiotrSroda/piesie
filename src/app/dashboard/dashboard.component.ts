import { Component, OnInit } from '@angular/core';
import { PiesieService } from '../piesie.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {
  constructor(
    private piesieService: PiesieService,
    private location: Location,
    private router: Router
    ) { }
  
  psieRasyTablica?: any[];  

  ngOnInit(): void {
    this.getPiesieRasy();    
  }

  getPiesieRasy(): void {
    this.piesieService.getRasyPiesie()
    .subscribe(data => this.makeRasyArray(data));    
  }
 
  setPiesieUrl(rasa: string){
    this.router.navigate([`/${rasa}`]);
  }
  makeRasyArray(data: any): any{
    let tempRasy = data.message;
    let tempArray = [];
    for(var i in tempRasy)
    tempArray.push({
      'breed_name': i,
      'sub_breeds': tempRasy[i]
    });
    this.psieRasyTablica = tempArray;
  }
  

  
}
