import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-six-schn',
  templateUrl: './step-six-schn.component.html',
  styleUrls: ['./step-six-schn.component.scss']
})
export class StepSixSchnComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router,) { }
  date = new Date()

  ngOnInit(): void {
  }

  onNext() {

    // this.commonService.msStep = 4
    localStorage.setItem('schnStepSixData6', JSON.stringify(this.commonService.schnStepSixData6))
    console.log("schnStepSixData6", this.commonService.schnStepSixData6)

    this.router.navigateByUrl('/bewerbungsgesprach_vorbereiten/schn-preview')
  }

  onBack() {
    this.commonService.msStep = 5
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

  }
}
