import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-six-lehr',
  templateUrl: './step-six-lehr.component.html',
  styleUrls: ['./step-six-lehr.component.scss']
})
export class StepSixLehrComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router,) { }

  ngOnInit(): void {
  }

  onNext() {
    // localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))
    localStorage.setItem('lehrStepSixData6', JSON.stringify(this.commonService.lehrStepSixData6))
    console.log("lehrStepSixData6", this.commonService.lehrStepSixData6)
    this.router.navigateByUrl('/bewerbungsgesprach_vorbereiten/lehr-preview')
  }

 
  onBack() {
    this.commonService.msStep = 5
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

  }
}