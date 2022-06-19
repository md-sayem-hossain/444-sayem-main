import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-two-schn',
  templateUrl: './step-two-schn.component.html',
  styleUrls: ['./step-two-schn.component.scss']
})
export class StepTwoSchnComponent implements OnInit {

  constructor(public commonService: CommonService,) { }

  ngOnInit(): void {
  }

  onNext() {

    this.commonService.msStep = 4
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))
    localStorage.setItem('schnStepTwoData2', JSON.stringify(this.commonService.schnStepTwoData2))
    console.log("schnStepTwoData2", this.commonService.schnStepTwoData2)

  }

  onBack() {
    this.commonService.msStep = 2
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

  }
}
