import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TrafficService } from 'src/app/traffic.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit, AfterViewInit, OnChanges {
  private vehicleList = [];
  private headers = [];
  private vehicleNo;
  @Input() type;
  constructor(private trafficService: TrafficService) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.type && changes.type && changes.type.currentValue != changes.type.previousValue) {
      this.headers = this.trafficService.getHeaders(this.type);
      this.vehicleList = this.trafficService.getVehicles(this.type);
    }
  }
  ngAfterViewInit() {  }

  tdClick(event, data, index) {
    let isAction = (event.target.getAttribute("class") || "").split(" ").indexOf("grid-action") > -1;
    if(isAction) {
      if(this.type == "vehicles")
        this.trafficService.markAsViolation(data);
      else {
        this.trafficService.finePaid(index);
        this.onSearch();
      }    
    }
  }

  onSearch() {
    if(this.vehicleNo) {
      this.vehicleList = this.trafficService.getVehicleDetailsOnSearch(this.type, this.vehicleNo);
    } else {
      this.vehicleList = this.trafficService.getVehicles(this.type);
    }
    
  }

}
