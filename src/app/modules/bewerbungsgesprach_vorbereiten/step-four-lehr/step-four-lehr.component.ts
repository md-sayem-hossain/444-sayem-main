import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-four-lehr',
  templateUrl: './step-four-lehr.component.html',
  styleUrls: ['./step-four-lehr.component.scss']
})
export class StepFourLehrComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router,) { }

  ngOnInit(): void {
  }

  onNext() {
    this.commonService.msStep = 5
        localStorage.setItem('lehrStepFourData4', JSON.stringify(this.commonService.lehrStepFourData4))
    console.log("lehrStepFourData4", this.commonService.lehrStepFourData4)
    // this.router.navigateByUrl('/bewerbungsgesprach_vorbereiten/lehr-preview')
  }

  onBack() {
    this.commonService.msStep = 1
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

  }

}