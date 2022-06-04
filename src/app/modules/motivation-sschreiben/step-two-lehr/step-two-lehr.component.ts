import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-two-lehr',
  templateUrl: './step-two-lehr.component.html',
  styleUrls: ['./step-two-lehr.component.scss']
})
export class StepTwoLehrComponent implements OnInit {

  constructor(public commonService: CommonService,) { }

  ngOnInit(): void {
  }

  onNext() {

    this.commonService.msStep = 3
    localStorage.setItem('lehrStepTwoData2', JSON.stringify(this.commonService.lehrStepTwoData2))
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))
    console.log("lehrStepTwoData2", this.commonService.lehrStepTwoData2)
  }

  onBack() {
    this.commonService.msStep = 1
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))
  }
}
