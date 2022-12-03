import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { getAllFiles, getAllFilesSync } from 'get-all-files'

@Component({
  selector: 'app-berufswahl-unterrichtsmaterial',
  templateUrl: './berufswahl-unterrichtsmaterial.component.html',
  styleUrls: ['./berufswahl-unterrichtsmaterial.component.scss']
})
export class BerufswahlUnterrichtsmaterialComponent implements OnInit {

  
  constructor(public commonService: CommonService) { }
 

  ngOnInit(): void { 

  } 
} 


