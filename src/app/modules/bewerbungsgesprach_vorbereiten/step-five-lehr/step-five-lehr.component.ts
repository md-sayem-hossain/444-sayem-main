import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-five-lehr',
  templateUrl: './step-five-lehr.component.html',
  styleUrls: ['./step-five-lehr.component.scss']
})
export class StepFiveLehrComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router,) { }

  ngOnInit(): void {
  }

  onNext() {
    this.commonService.msStep = 6
        localStorage.setItem('lehrStepFiveData5', JSON.stringify(this.commonService.lehrStepFiveData5))
    console.log("lehrStepFiveData5", this.commonService.lehrStepFiveData5)
    // this.router.navigateByUrl('/bewerbungsgesprach_vorbereiten/lehr-preview')
  }

  onBack() {
    this.commonService.msStep = 1
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

  }

}