import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BewerbungsgesprachRoutingModule } from './bewerbungsgesprach-routing.module';

import { StepOneComponent } from './step-one/step-one.component';

import { StepTwoLehrComponent } from './step-two-lehr/step-two-lehr.component';
import { StepTwoSchnComponent } from './step-two-schn/step-two-schn.component';

import { StepThreeLehrComponent } from './step-three-lehr/step-three-lehr.component';
import { StepThreeSchnComponent } from './step-three-schn/step-three-schn.component';

import { StepFourLehrComponent } from './step-four-lehr/step-four-lehr.component';
import { StepFourSchnComponent } from './step-four-schn/step-four-schn.component';

import { StepFiveLehrComponent } from './step-five-lehr/step-five-lehr.component';
import { StepFiveSchnComponent } from './step-five-schn/step-five-schn.component';


import { StepSixLehrComponent } from './step-six-lehr/step-six-lehr.component';
import { StepSixSchnComponent } from './step-six-schn/step-six-schn.component';

import { BewerbungsgesprachComponent } from './bewerbungsgesprach_vorbereiten.component';
import { MsLehrPreviewComponent } from './ms-lehr-preview/ms-lehr-preview.component';
import { MsSchnPreviewComponent } from './ms-schn-preview/ms-schn-preview.component';


@NgModule({
  declarations: [
    BewerbungsgesprachComponent,
    
    StepOneComponent,

    StepTwoLehrComponent,
    StepTwoSchnComponent,

    StepThreeLehrComponent,
    StepThreeSchnComponent,

    StepFourLehrComponent,
    StepFourSchnComponent,

    StepFiveLehrComponent,
    StepFiveSchnComponent,

    StepSixLehrComponent,
    StepSixSchnComponent,

    MsLehrPreviewComponent,
    MsSchnPreviewComponent
  ],
  imports: [
    CommonModule,
    BewerbungsgesprachRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class Bewerbungsgesprach { }
