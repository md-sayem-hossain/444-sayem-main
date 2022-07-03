import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { CommonService } from 'src/app/core/services/common.service';
import { Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  BorderStyle,
  ImageRun,
  TextWrappingType,
  TextWrappingSide,
  Alignment,
} from "docx";


@Component({
  selector: 'app-ms-lehr-preview',
  templateUrl: './ms-lehr-preview.component.html',
  styleUrls: ['./ms-lehr-preview.component.scss']
})
export class MsLehrPreviewComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router, public sanitizer: DomSanitizer) { }
  @ViewChild('content') content!: ElementRef;
  beilagen = ''

  ngOnInit(): void {
    let beilagenArray = []
    beilagenArray.push(this.commonService.lehrStepThreeData.lebenslauf ? 'Lebenslauf' : '')
    beilagenArray.push(this.commonService.lehrStepThreeData.zeugnisse ? 'Zeugnisse' : '')
    beilagenArray.push(this.commonService.lehrStepThreeData.stellwerktest ? 'Stellwerktest' : '')
    beilagenArray.push(this.commonService.lehrStepThreeData.Schnupperberichte ? 'Schnupperberichte' : '')
    beilagenArray.push(this.commonService.lehrStepThreeData.multicheck ? 'Multicheck' : '')
    beilagenArray.push(this.commonService.lehrStepThreeData.eigene)
    var filtered = beilagenArray.filter((el: any) => {
      return el != "";
    });
    this.beilagen = filtered.join(' / ')
    // console.log("array-->", this.beilagen)

  }

  onBack() {
    this.router.navigateByUrl('/bewerbungsgesprach_vorbereiten')
  }

  loader = false
  exportToPDF() {
    
     this.loader = true
    let that = this
    html2canvas(document.getElementById('pdf-page')!, {
      allowTaint: true,
      scale: 4,
      width: this.content.nativeElement.offsetWidth,
      height: this.content.nativeElement.offsetHeight
    }).then(function (canvas) {
      const contentDataURL = canvas.toDataURL('image/jpeg')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;

      // if (height > 0) {
      //   var j = 1;
      //   while (j != height) {
      //      pdf.addImage(contentDataURL, 'JPEG', 0, 0, width, height)
      //       j++;
      //   }}

     
      let name = 'lehrstell-motivation-sschreiben' + new Date().toUTCString() + '.pdf'
      pdf.save(name); // Generated PDF
      that.loader = false
    });
  }




//sayem
exportToWord() {
  const doc = new Document({
      styles: {
          default: {
              heading2: {
                  run: {
                      size: 30,
                      bold: true,
                      color: "000000",
                      font: "Calibri"
                  },
                  paragraph: {
                      spacing: {
                          after: 120,
                      },
                  },
              }
          },
          paragraphStyles: [
              {
                  id: "paragraphStyle",
                  name: "ParagraphStyle",
                  basedOn: "Normal",
                  next: "Normal",
                  run: {
                      color: "000000",
                      font: "Calibri"
                  }
              }
          ]
      },
      title: 'lehrstell-lebenslauf',
      sections: [{
          properties: {
              page: {
                  margin: {
                      top: 700,
                      bottom: 700,
                      left: 700,
                      right: 700
                  }
              }
          },
          children: [
               
              new Paragraph({
                  text: "Hello",
                  heading: HeadingLevel.HEADING_2
              }),
              
              new Paragraph({
                style: "paragraphStyle",
                spacing: {
                    before: 400,
                },
                children: [
                    new TextRun({
                      text: "1) Wer hat dich beim Schreiben deines Bewerbungsdossiers unterstützt?",
                      bold: true,
                      size: 26,
                    }),
                    new TextRun({
                      break:1,
                        text: `${this.commonService.lehrStepOneData.textArea10}`,
                        italics: true,
                        color: "8282ff",
                    })
                ],
            }),
           ],
      }],
  });

  Packer.toBlob(doc).then((blob) => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = 'lehrstell-lebenslauf' + new Date().toUTCString() + '.doc';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
  });
}















  // exportToWord() {
  //   var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>lehrstell-motivation-sschreiben</title></head><body style='font-family: Calibri'>";
  //   var postHtml = "</body></html>";
  //   var html = preHtml + this.content.nativeElement.innerHTML + postHtml;

  //   // Specify link url
  //   var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

  //   // Specify file name
  //   let filename = 'lehrstell-motivation-sschreiben' + new Date().toUTCString() + '.doc'
  //   // Create download link element
  //   var downloadLink = document.createElement("a");

  //   document.body.appendChild(downloadLink);

  //   downloadLink.href = url;

  //   // Setting the file name
  //   downloadLink.download = filename;

  //   //triggering the function
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);

  // }

  isObjectEmpty(Obj: any) {
    for (var key in Obj) {
      if (Obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
}
