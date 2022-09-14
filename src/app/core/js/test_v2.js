// const { disposeEmitNodes } = require("typescript");
// const { brotliDecompressSync } = require("zlib");

function myfunction(params1, params2) {
  console.log('param1', params1);
  console.log('param2', params2);
}

function getPDF() {
  var doc = new jsPDF();

  // We'll make our own renderer to skip this editor
  var specialElementHandlers = {
    '#getPDF': function (element, renderer) {
      return true;
    },
    '.controls': function (element, renderer) {
      return true;
    }
  };

  // All units are in the set measurement for the document
  // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
  doc.fromHTML($('.page').get(0), 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
  });

  doc.save('Generated.pdf');
}

function CreatePDFfromHTML() {
  var HTML_Width = $(".page").width() * 3;
  var HTML_Height = $(".page").height() * 3;
  var top_left_margin = 15;
  var PDF_Width = HTML_Width + (top_left_margin * 2);
  var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  html2canvas($(".page")[0]).then(function (canvas) {
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
    for (var i = 1; i <= totalPDFPages; i++) {
      pdf.addPage(PDF_Width, PDF_Height);
      pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
    }
    pdf.save("invoice_<?php echo $trackingNumber ;?>.pdf");
    $(".page").hide();
  });
}




function modelOnClick() {
  document.getElementById("myModal").style.display = "block";
}

function modelOffClick() {
  document.getElementById("myModal").style.display = "none";
}



function modelOn2Click() {
  document.getElementById("myModal2").style.display = "block";
}

function modelOff2Click() {
  document.getElementById("myModal2").style.display = "none";
}


function modelOn3Click() {
  document.getElementById("myModal3").style.display = "block";
}

function modelOff3Click() {
  document.getElementsByClassName("mbl-popup-main").style.display = 'none !important';
}

function modelOff4Click() {
  document.getElementById("myModal3").attr("display","none !important");
}
 

 console.log("i am running");
// if (screen.width > 1024) {
//   // document.getElementById("myModal3").style.display = "block";
//   $("#myModal3").modal('show');

// }


// $(window).on('load', function() {
//   $("#myBtn3").click();
// });

// else if(screen.width > 1024) {
//   document.getElementById("myModal3").style.display = "none";
// }


function generate() {
  const doc = new docx.Document({
    sections: [
      {
        properties: {},
        children: [
          new docx.Paragraph({
            children: [
             new docx.TextRun({
                text: "1) Wer hat dich beim Schreiben deines Bewerbungsdossiers unterstützt?",
                bold: true,
               }),
                new docx.TextRun({
                text: "DOCX browser Word document generation",
                spacing: {
                   before: 400,
                       },
                size: 50,
                break:1,
                italics: true,
                color: "8282ff",
              }),
               new docx.TextRun({
                text: "Note:",
                break:1,
              }),
                new docx.TextRun({
                text: "2) Wie sind deine Schulnoten?",
                bold: true,
                break:1,
              }),
                new docx.TextRun({
                text: "",
                break:1,
                italics: true,
              }),
              new docx.TextRun({
                text: "Note:",
                break:1,
              }),
               new docx.TextRun({
                text: "3) Wie sind deine Zeugnisse (Verhalten/ Absenzen)?",
                bold: true,
                 break:1,
              }),
                new docx.TextRun({
                text: " ",
                break:1,
                italics: true,
                color: "8282ff",
              }),
              new docx.TextRun({
                text: "Note:",
                break:1,
              })           
        ]
          })
        ]
      }
    ]
  });

  docx.Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, "example.docx");
    console.log("Document created successfully");
  });
}




// cUSTOM MODAL BY  SAYEM
function OpenModal() {
  document.getElementById("main2").style.display = "block";

  document.getElementById("a").style.display = "block";
  document.getElementById("b").style.display = "block"; 
  setTimeout(function() {
    CloseModal();
}, 4000);
}

function CloseModal() {
  document.getElementById("main2").style.display = "none";
  document.getElementById("a").style.display = "none";
  document.getElementById("b").style.display = "none";  
}


// function DownloadFunction() {
//   setTimeout(function() {
//     $('#CloseBTN').trigger('click');
// }, 3000);
// }

function popupimgclose() {
  document.getElementById("popup").style.display = "none";  
}
 

function displayCounter() {
  if ('localStorage' in window && window['localStorage'] !== null) {
     ('counter' in localStorage && localStorage['counter'] !== null) ? localStorage['counter']++ : localStorage['counter'] = 0;
     var container = document.getElementById('container');
     if (!container) {  return };
     console.log(localStorage['counter']);
     if(localStorage['counter']>2){
      document.getElementById("popup").style.display = "block";  
     }
     else{
      document.getElementById("popup").style.display = "none";  
      localStorage.clear();
     } 
 } 
}
window.onload = function () {
 displayCounter();
}


console.log("I am loaded");