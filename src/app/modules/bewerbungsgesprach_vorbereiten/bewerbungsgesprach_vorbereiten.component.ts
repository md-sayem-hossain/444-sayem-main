import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-bewerbungsgesprach_vorbereiten',
  templateUrl: './bewerbungsgesprach_vorbereiten.component.html',
  styleUrls: ['./bewerbungsgesprach_vorbereiten.component.scss']
})
export class BewerbungsgesprachComponent implements OnInit {
  step: Number = 1
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  } 
 
  nextStep(step: Number) {
    this.step = step
  }
}