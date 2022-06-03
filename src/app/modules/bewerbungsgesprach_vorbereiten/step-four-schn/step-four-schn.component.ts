import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-four-schn',
  templateUrl: './step-four-schn.component.html',
  styleUrls: ['./step-four-schn.component.scss']
})
export class StepFourSchnComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router,) { }
  date = new Date()

  ngOnInit(): void {
  }

  onNext() {

    this.commonService.msStep = 5
    localStorage.setItem('schnStepFourData4', JSON.stringify(this.commonService.schnStepFourData4))
    console.log("schnStepFourData4", this.commonService.schnStepFourData4)

    // this.router.navigateByUrl('/bewerbungsgesprach_vorbereiten/schn-preview')
  }
  onBack() {
    this.commonService.msStep = 1
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

  }
 
}
