import { Component, OnInit } from '@angular/core';
import { TrafficService } from '../traffic.service';

@Component({
  selector: 'app-traffic-violation',
  templateUrl: './traffic-violation.component.html',
  styleUrls: ['./traffic-violation.component.scss']
})
export class TrafficViolationComponent implements OnInit {

  constructor(trafficService: TrafficService) { }

  ngOnInit() {
  }

}
