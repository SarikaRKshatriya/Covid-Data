import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-covid-list',
  templateUrl: './covid-list.component.html',
  styleUrls: ['./covid-list.component.scss']
})
export class CovidListComponent implements OnInit {
  public coviddata:any;
  public currentPage =0;
  public total = 0;
  public pageSize=10;
  constructor(private covidservice:CovidService) { }

  ngOnInit(): void {
    this.covidservice.getCovidData().subscribe(res=>{
      this.coviddata = res["Countries"];
      //console.log(this.coviddata);
      this.total = res["Countries"].length;
    })
  }
  pageChange(number){
    //console.log(number);
  }
  SelectChanged(e){
    this.pageSize =e;
    //console.log(e);
  }
}
