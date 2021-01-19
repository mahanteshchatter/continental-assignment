import { Component, OnInit } from '@angular/core';
import { TrafficService } from '../../traffic.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  private vehicleList = [];
  private headers = [];
  constructor(private trafficService: TrafficService) { }

  ngOnInit() { }
}
