import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-five-schn',
  templateUrl: './step-five-schn.component.html',
  styleUrls: ['./step-five-schn.component.scss']
})
export class StepFiveSchnComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router,) { }
  date = new Date()

  ngOnInit(): void {
  }

  onNext() {

    this.commonService.msStep = 6
    localStorage.setItem('schnStepFiveData5', JSON.stringify(this.commonService.schnStepFiveData5))
    console.log("schnStepFiveData5", this.commonService.schnStepFiveData5)

    // this.router.navigateByUrl('/bewerbungsgesprach_vorbereiten/schn-preview')
  }

  onBack() {
    this.commonService.msStep = 4
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

  }
}
