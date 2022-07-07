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
} from 'docx';
@Component({
  selector: 'app-ms-schn-preview',
  templateUrl: './ms-schn-preview.component.html',
  styleUrls: ['./ms-schn-preview.component.scss']
})
export class MsSchnPreviewComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router, public sanitizer: DomSanitizer) { }
  @ViewChild('content') content!: ElementRef;
  beilagen = ''

  ngOnInit(): void {
    let beilagenArray = []
    beilagenArray.push(this.commonService.schnStepThreeData.lebenslauf ? 'Lebenslauf' : '')
    beilagenArray.push(this.commonService.schnStepThreeData.zeugnisse ? 'Zeugnisse' : '')
    beilagenArray.push(this.commonService.schnStepThreeData.eigene)
    var filtered = beilagenArray.filter((el: any) => {
      return el != "";
    });
    this.beilagen = filtered.join(' / ')
    // console.log("array-->", this.beilagen)

  }

  onBack() {
    this.router.navigateByUrl('/motivation-sschreiben')
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
      pdf.addImage(contentDataURL, 'JPEG', 0, 0, width, height)
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
            size: 36,
            bold: true,
            color: '000000',
            font: 'Calibri',
          },
          paragraph: {
            spacing: {
              after: 400,
            },
          },
        },
      },
      paragraphStyles: [
        {
          id: 'paragraphStyle',
          name: 'ParagraphStyle',
          basedOn: 'Normal',
          next: 'Normal',
          run: {
            color: '000000',
            font: 'Calibri',
          },
        },
      ],
    },
    title: 'lehrstell-motivation-sschreiben',
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1500,
              bottom: 1500,
              left: 1500,
              right: 1500,
            },
          },
        },
        children: [
          // new Paragraph({
          //     text: "Vorbereitungsfragen für dein Bewerbungsgespräch",
          //     heading: HeadingLevel.HEADING_2
          // }),

          new Paragraph({
            style: 'paragraphStyle',
            spacing: {
              before: 700,
            },
            children: [
              // Md Sayem Hossain
              // Middle hali street 10
              // 4215 Chittagong
              // my@email.com
              // 018888888888

              // Md Sayem Hossain
              new TextRun({
                text: `${this.commonService.msPersonalForm.firstName}`,
              }),
              new TextRun({
                text: ' ',
              }),
              new TextRun({
                text: `${this.commonService.msPersonalForm.lastName}`,
              }),

              // Middle hali street 10
              new TextRun({
                break:1,
                text: `${this.commonService.msPersonalForm.street}`,
              }),
              new TextRun({
                text: ' ',
              }),
              new TextRun({
                text: `${this.commonService.msPersonalForm.Number}`,
              }),
             


            // 4215 Chittagong
            new TextRun({
              break:1,
              text: `${this.commonService.msPersonalForm.zip}`,
            }),
            new TextRun({
              text: ' ',
            }),
            new TextRun({
              text: `${this.commonService.msPersonalForm.place}`,
            }),
            
            
            // 4215 Chittagong
            new TextRun({
              break:1,
              text: `${this.commonService.msPersonalForm.email}`,
            }),
            


            // 4215 Chittagong
            new TextRun({
              break:1,
              text: `${this.commonService.msPersonalForm.mobile}`,
            }),














            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download =
      'lehrstell-motivation-sschreiben' + new Date().toUTCString() + '.doc';
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
