import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // Math.floor((Math.random() * 100) + 1)

  //=============================== Generate CV Section Start ================================//
  public step: Number = 1
  public personalData: any
  public siblings = [{ firstname: '', job: '' }]
  public schooling = [{ von: '', bis: '', schule: '', ort: '' }]
  public languages = [{ language: '', type: '' }]
  public custLanguages = [{ language: '', type: '' }]
  public hobbys = [
    { name: '', description: '', leftBoxPlaceHolder: 'Karate', rightBoxPlaceHolder: 'Ich mache seit 4 Jahren Karate und habe den grünen Gürtel.' },
    { name: '', description: '', leftBoxPlaceHolder: 'Fotografie', rightBoxPlaceHolder: 'Das Fotografieren ist meine grosse Leidenschaft.' }
  ]
  public trailApprentice = [{ von: '', bis: '', beruf: '', firma: '', ort: '' }]
  public references = [{ firstName: '', lastName: '', email: '', mobile: '', function: '' }]
  public impressumContent = ''
  //=============================== Generate motivation-sschreiben Section End ================================//

  //=============================== Generate motivation-sschreiben Section Start ================================//
  public msStep: Number = 1
  public msType = 'lehrstelle' //schnupperlehre
  public schreibst = 'unknown' //schnupperlehre
  public msPersonalForm: any
  lehrStepOneData = {
    textArea10: '',
    textArea11: '',
    textArea12: '',
    textArea10PlaceHolder: 'Ich habe den Lebenslauf und das Motivationsschreiben mit der Seite Lehrstell.ch verfasst und meine IF-Lehrperson hat beides korrigiert. Mein älterer Bruder ist bereits in der Lehre und hat mein Bewerbungsdossier durchgeschaut und mir noch Tipps gegeben.',
    textArea11PlaceHolder: 'Ich bin nicht der Klassenbeste, aber auch nicht schlecht in der Schule. Gute Noten habe ich im Englisch und im RZG, weil mich diese Fächer sehr interessieren. Im Fach Mathi und NT habe ich Mühe und muss viel lernen. Die Noten sind da nicht so gut, aber ich versuche noch besser zu werden.',
    textArea12PlaceHolder: 'Meine Klassenlehrerin sagt, dass sie mein Verhalten gut findet. Ich versuche mich immer an die Schulhausregeln zu halten. Ich könnte jedoch im Unterricht noch selbständiger werden.',
  }   
  lehrStepTwoData = {
    textArea1: '',
    textArea2: '',
    textArea3: '',
    textArea1PlaceHolder: 'Wir haben keine Hausaufgaben mehr. Wir haben aber drei Mal pro Woche die persönliche Lernzeit (PLZ) und dort kann man Sachen nachholen oder üben. Für die Prüfungen schreibe ich mir immer eine Zusammenfassung und lerne mit dieser.',
    textArea2PlaceHolder: 'Ich habe den Beruf Detailhandelsassistent zwei Mal geschnuppert und die Arbeiten haben mir sehr gefallen. Ich möchte meine Lehre in einem Grossunternehmen absolvieren, damit ich nach der Lehre eine Weiterbildung machen kann.',
    textArea3PlaceHolder: 'Schulisch: Ja, ich mache im Unterricht gut mit und lerne für Prüfungen und schreibe gute Noten.    Persönlich: Ich bin pünktlich, freundlich und kann gut allein oder in einem Team arbeiten.'
  }

  schnStepTwoData = {
    textArea1: '',
    textArea2: '',
    textArea3: '',
    textArea1PlaceHolder: 'Wir haben keine Hausaufgaben mehr. Wir haben aber drei Mal pro Woche die persönliche Lernzeit (PLZ) und dort kann man Sachen nachholen oder üben. Für die Prüfungen schreibe ich mir immer eine Zusammenfassung und lerne mit dieser.',
    textArea2PlaceHolder: 'Ich habe den Beruf Detailhandelsassistent zwei Mal geschnuppert und die Arbeiten haben mir sehr gefallen. Ich möchte meine Lehre in einem Grossunternehmen absolvieren, damit ich nach der Lehre eine Weiterbildung machen kann.',
    textArea3PlaceHolder: 'Schulisch: Ja, ich mache im Unterricht gut mit und lerne für Prüfungen und schreibe gute Noten.  Persönlich: Ich bin pünktlich, freundlich und kann gut allein oder in einem Team arbeiten.'
   }



   lehrStepTwoData2 = {
    textArea1: '',
    textArea2: '',
    textArea3: '',
    textArea1PlaceHolder: 'Ich habe im Internet gesehen, dass Sie eine Lehrstelle als Logistiker mit Beginn im August 2022 anbieten. Ich bewerbe mich hiermit um diese Lehrstelle. Sehr gerne würde ich in Ihrem Unternehmen mit anpacken und die Ausbildung zum Logistiker EBA absolvieren.',
    textArea2PlaceHolder: 'Den Beruf des Logistikers habe ich bereits beim Schnuppern bei der Firma Logik AG kennengelernt. Dort merkte ich, dass ich mich für eine Ausbildung als Logistiker bewerben werde, da mir die Schnuppertage in diesem Beruf sehr gefallen haben.',
    textArea3PlaceHolder: 'Die Kontrolle und der Transport der Waren mit dem Gabelstapler bereiten mir grosse Freude. Auch der Kontakt mit Kunden gefällt mir. Ich arbeite gerne praktisch, packe mit an und erledige Aufträge konzentriert und zügig. Die Firma Logistik AG würde mir als Lehrbetrieb gefallen, da es ein familiäres Unternehmen ist.',
  }

  schnStepTwoData2 = {
    textArea1: '',
    textArea2: '',
    textArea3: '',
    textArea1PlaceHolder: 'Für die telefonische Auskunft vom 5. Januar danke ich Ihnen und bewerbe mich hiermit um eine Schnupperlehre als Logistiker.',
    textArea2PlaceHolder: 'Zurzeit besuche ich die 2. Sekundarschule Niveau C in Luzern. Meine Lieblingsfächer sind bildnerisches Gestalten und Sport. In meiner Freizeit spiele ich Fussball beim FC Muster.',
    textArea3PlaceHolder: 'Ich habe im Internet den Berufsbeschrieb gelesen und nun interessiere ich mich sehr für diesen Beruf. In der Schnupperlehre möchte ich nun den Berufsalltag eines Logistikers besser kennen lernen.',
   }




  lehrStepThreeData3 = {
    textArea4: '',
    textArea5: '',
    textArea6: '',
    textArea4PlaceHolder: 'Ich habe bereits bei Ihnen geschnuppert und es hat mir sehr gefallen. Ich möchte zu Ihnen, weil mir viele berichtet haben, dass die Lehrmeister sehr gut zu den Lehrlingen schauen und alle Lehrlinge, die ich kenne sehr gerne zur Arbeit kamen.',
    textArea5PlaceHolder: 'Gehe auf die Website der Firma. Schaue nach, welche Produkte oder Dienstleistungen von der Firma angeboten werden und notiere dies in dieses Feld hier.',
    textArea6PlaceHolder: 'Die Kontrolle und der Transport der Waren mit dem Gabelstapler bereiten mir grosse Freude. Auch der Kontakt mit Kunden gefällt mir. Ich arbeite gerne praktisch, packe mit an und erledige Aufträge konzentriert und zügig. Die Firma Logistik AG würde mir als Lehrbetrieb gefallen, da es ein familiäres Unternehmen ist.Ich habe bereits 4 Schnupperlehren gemacht: <br>  Positiv fand ich: Kundenkontakt, Team, Abwechslung. <br> Negativ fand ich: Bei zwei Betrieben durfte ich den ganzen Tag fast nur zusehen und nichts selber machen',
  }

  schnStepThreeData3 = {
    textArea4: '',
    textArea5: '',
    textArea6: '',
    textArea4PlaceHolder: 'Ich habe bereits bei Ihnen geschnuppert und es hat mir sehr gefallen. Ich möchte zu Ihnen, weil mir viele berichtet haben, dass die Lehrmeister sehr gut zu den Lehrlingen schauen und alle Lehrlinge, die ich kenne sehr gerne zur Arbeit kamen.',
    textArea5PlaceHolder: 'Gehe auf die Website der Firma. Schaue nach, welche Produkte oder Dienstleistungen von der Firma angeboten werden und notiere dies in dieses Feld hier.',
    textArea6PlaceHolder: 'Die Kontrolle und der Transport der Waren mit dem Gabelstapler bereiten mir grosse Freude. Auch der Kontakt mit Kunden gefällt mir. Ich arbeite gerne praktisch, packe mit an und erledige Aufträge konzentriert und zügig. Die Firma Logistik AG würde mir als Lehrbetrieb gefallen, da es ein familiäres Unternehmen ist.Ich habe bereits 4 Schnupperlehren gemacht: <br>  Positiv fand ich: Kundenkontakt, Team, Abwechslung. <br> Negativ fand ich: Bei zwei Betrieben durfte ich den ganzen Tag fast nur zusehen und nichts selber machen',
   }


  lehrStepFourData4 = {
    textArea7: '',
    textArea8: '',
    textArea9: '',
    textArea7PlaceHolder: 'Dass ich gut betreut werde und gerne zur Arbeit kommen werde.',
    textArea8PlaceHolder: 'Meine Stärken sind: Ich bin freundlich, hilfsbereit, pünktlich und fleissig. Meine Schwächen sind: Ich bin eher ruhig und zurückhaltend. Manchmal sage ich meine Meinung nicht.',
    textArea9PlaceHolder: 'Hier zählst du gute Beispiele aus deinen Schnupperlehren auf.',
  }

  schnStepFourData4 = {
    textArea7: '',
    textArea8: '',
    textArea9: '',
    textArea7PlaceHolder: 'Dass ich gut betreut werde und gerne zur Arbeit kommen werde.',
    textArea8PlaceHolder: 'Meine Stärken sind: Ich bin freundlich, hilfsbereit, pünktlich und fleissig. Meine Schwächen sind: Ich bin eher ruhig und zurückhaltend. Manchmal sage ich meine Meinung nicht.',
    textArea9PlaceHolder: 'Hier zählst du gute Beispiele aus deinen Schnupperlehren auf.',
   }


  lehrStepFiveData5 = {
    textArea13: '',
    textArea14: '',
    textArea15: '',
    textArea13PlaceHolder: 'Ich kann sehr gut im Team arbeiten. In der Schule haben wir im Projektunterricht oft in verschiedenen Gruppen gearbeitet und in der Freizeit spiele ich Basketball und dort ist Teamwork sehr wichtig.',
    textArea14PlaceHolder: 'In der Primarschule konnte ich nicht gut streiten und wurde teilweise sehr wütend. Heute verhalte ich mich in Konfliktsituationen ruhig und überlege immer zuerst was ich mache oder sage.',
    textArea15PlaceHolder: 'Ich spiele Basketball in der U15-Mannschaft im BSK Muster. In der Freizeit gehe ich gerne in die Stadt mit Freunden und in den Schulferien gehe oft mit meiner Familie nach Portugal, da ich ursprünglich von dort komme.',
  }

  schnStepFiveData5 = {
    textArea13: '',
    textArea14: '',
    textArea15: '',
    textArea13PlaceHolder: 'Ich kann sehr gut im Team arbeiten. In der Schule haben wir im Projektunterricht oft in verschiedenen Gruppen gearbeitet und in der Freizeit spiele ich Basketball und dort ist Teamwork sehr wichtig.',
    textArea14PlaceHolder: 'In der Primarschule konnte ich nicht gut streiten und wurde teilweise sehr wütend. Heute verhalte ich mich in Konfliktsituationen ruhig und überlege immer zuerst was ich mache oder sage.',
    textArea15PlaceHolder: 'Ich spiele Basketball in der U15-Mannschaft im BSK Muster. In der Freizeit gehe ich gerne in die Stadt mit Freunden und in den Schulferien gehe oft mit meiner Familie nach Portugal, da ich ursprünglich von dort komme.',
  }



  lehrStepSixData6 = {
    textArea16: '',
    textArea17: '',
    textArea18: '',
    textArea16PlaceHolder: 'Mein Vater arbeitet bei der Firma Muster AG und meine Mutter arbeitet drei Mal pro Woche in der Pflege. Ich habe keine Geschwister und meine Eltern unterstützen mich in der Schule.',
    textArea17PlaceHolder: 'Ich werde mit dem ÖV zur Arbeit fahren. Später möchte ich mir eventuell noch einen Roller kaufen, damit ich an schönen Tagen mit dem Roller zur Arbeit fahren kann.',
    textArea18PlaceHolder: 'Ich möchte meine Lehre erfolgreich abschliessen und dann viele Weiterbildungen machen und erfolgreich im Beruf sein. Ich möchte einmal eine eigenen Familie haben und in einer schönen Wohnung wohnen. ',
  }

  schnStepSixData6 = {
    textArea16: '',
    textArea17: '',
    textArea18: '',
    textArea16PlaceHolder: 'Mein Vater arbeitet bei der Firma Muster AG und meine Mutter arbeitet drei Mal pro Woche in der Pflege. Ich habe keine Geschwister und meine Eltern unterstützen mich in der Schule.',
    textArea17PlaceHolder: 'Ich werde mit dem ÖV zur Arbeit fahren. Später möchte ich mir eventuell noch einen Roller kaufen, damit ich an schönen Tagen mit dem Roller zur Arbeit fahren kann.',
    textArea18PlaceHolder: 'Ich möchte meine Lehre erfolgreich abschliessen und dann viele Weiterbildungen machen und erfolgreich im Beruf sein. Ich möchte einmal eine eigenen Familie haben und in einer schönen Wohnung wohnen. ',
  }









  lehrStepThreeData = {
    textArea1: '',
    textArea1PlaceHolder: 'Ich besuche derzeit die zweite Sekundarstufe Niveau C an der Musterschule in Luzern. Meine Lieblingsfächer sind bildnerisches Gestalten und Sport. In meiner Freizeit spiele ich seit zwei Jahren Fussball beim FC Muster. Die Trainings und Matches sind für mich eine gute Abwechslung zum kopflastigen Schulalltag.',
    lebenslauf: false,
    stellwerktest: false,
    Schnupperberichte: false,
    zeugnisse: false,
    multicheck: false,
    eigene: '',
  }

  schnStepThreeData = {
    lebenslauf: false,
    zeugnisse: false,
    eigene: '',
    T1Von: '',
    T1Bis: '',
    T2Von: '',
    T2Bis: '',
    T3Von: '',
    T3Bis: '',
  }
  //=============================== Generate motivation-sschreiben Section End ================================//

  constructor() {
    this.setLocalStorgeDataForCV()
    this.setLocalStorgeDataForMS()

  }

  initAllData() {
    this.step = 1
    this.personalData = []
    this.siblings = [{ firstname: '', job: '' }]
    this.schooling = [{ von: '', bis: '', schule: '', ort: '' }]
    this.languages = [{ language: '', type: '' }]
    this.custLanguages = [{ language: '', type: '' }]
    this.hobbys = [
      { name: '', description: '', leftBoxPlaceHolder: 'Karate', rightBoxPlaceHolder: 'Ich mache seit 4 Jahren Karate und habe den grünen Gürtel.' },
      { name: '', description: '', leftBoxPlaceHolder: 'Fotografie', rightBoxPlaceHolder: 'Das Fotografieren ist meine grosse Leidenschaft.' }
    ];
    this.trailApprentice = [{ von: '', bis: '', beruf: '', firma: '', ort: '' }]
    this.references = [{ firstName: '', lastName: '', email: '', mobile: '', function: '' }]
    this.impressumContent = ''

    //=========== Generate motivation-sschreiben Section ===================//
    this.msStep = 1
    this.msType = 'lehrstelle'
    this.msPersonalForm = []
    this.lehrStepTwoData = {
      textArea1: '',
      textArea2: '',
      textArea3: '',
      textArea1PlaceHolder: 'Ich habe im Internet gesehen, dass Sie eine Lehrstelle als Logistiker mit Beginn im August 2022 anbieten. Ich bewerbe mich hiermit um diese Lehrstelle. Sehr gerne würde ich in Ihrem Unternehmen mit anpacken und die Ausbildung zum Logistiker EBA absolvieren.',
      textArea2PlaceHolder: 'Den Beruf des Logistikers habe ich bereits beim Schnuppern bei der Firma Logik AG kennengelernt. Dort merkte ich, dass ich mich für eine Ausbildung als Logistiker bewerben werde, da mir die Schnuppertage in diesem Beruf sehr gefallen haben.',
      textArea3PlaceHolder: 'Die Kontrolle und der Transport der Waren mit dem Gabelstapler bereiten mir grosse Freude. Auch der Kontakt mit Kunden gefällt mir. Ich arbeite gerne praktisch, packe mit an und erledige Aufträge konzentriert und zügig. Die Firma Logistik AG würde mir als Lehrbetrieb gefallen, da es ein familiäres Unternehmen ist.',
    }

    this.schnStepTwoData = {
      textArea1: '',
      textArea2: '',
      textArea3: '',
      textArea1PlaceHolder: 'Für die telefonische Auskunft vom 5. Januar danke ich Ihnen und bewerbe mich hiermit um eine Schnupperlehre als Detailhandelsassistentin in der Damenkonfektion. ',
      textArea2PlaceHolder: 'Zurzeit besuche ich die 2. Sekundarschule Niveau C in Luzern. Meine Lieblingsfächer sind bildnerisches Gestalten und Sport. ',
      textArea3PlaceHolder: 'In der Schnupperlehre möchte ich nun den Berufsalltag im Detailhandel besser kennen lernen. Den Beruf der Detailhandelsassistentin würde ich gerne schnuppern, weil ich mich sehr für Mode interessiere und mich auch gerne modisch kleide. Zudem bin ich sehr gerne in Kontakt mit anderen Menschen und helfe und berate gerne in modischen Fragen.  ',
    }

    this.lehrStepThreeData = {
      textArea1: '',
      textArea1PlaceHolder: 'Ich besuche derzeit die zweite Sekundarstufe Niveau C an der Musterschule in Luzern. Meine Lieblingsfächer sind bildnerisches Gestalten und Sport. In meiner Freizeit spiele ich seit zwei Jahren Fussball beim FC Muster. Die Trainings und Matches sind für mich eine gute Abwechslung zum kopflastigen Schulalltag.',
      lebenslauf: false,
      stellwerktest: false,
      Schnupperberichte: false,
      zeugnisse: false,
      multicheck: false,
      eigene: '',
    }

     

    this.schnStepThreeData = {
      lebenslauf: false,
      zeugnisse: false,
      eigene: '',
      T1Von: '',
      T1Bis: '',
      T2Von: '',
      T2Bis: '',
      T3Von: '',
      T3Bis: '',
    }







    // sayem=================
    this.lehrStepOneData = {
      textArea10: '',
      textArea11: '',
      textArea12: '',
      textArea10PlaceHolder: 'Ich habe den Lebenslauf und das Motivationsschreiben mit der Seite Lehrstell.ch verfasst und meine IF-Lehrperson hat beides korrigiert. Mein älterer Bruder ist bereits in der Lehre und hat mein Bewerbungsdossier durchgeschaut und mir noch Tipps gegeben.',
      textArea11PlaceHolder: 'Ich bin nicht der Klassenbeste, aber auch nicht schlecht in der Schule. Gute Noten habe ich im Englisch und im RZG, weil mich diese Fächer sehr interessieren. Im Fach Mathi und NT habe ich Mühe und muss viel lernen. Die Noten sind da nicht so gut, aber ich versuche noch besser zu werden.',
      textArea12PlaceHolder: 'Meine Klassenlehrerin sagt, dass sie mein Verhalten gut findet. Ich versuche mich immer an die Schulhausregeln zu halten. Ich könnte jedoch im Unterricht noch selbständiger werden.',
    }   
    
  
  
    this.lehrStepTwoData2 = {
      textArea1: '',
      textArea2: '',
      textArea3: '',
      textArea1PlaceHolder: 'Ich habe im Internet gesehen, dass Sie eine Lehrstelle als Logistiker mit Beginn im August 2022 anbieten. Ich bewerbe mich hiermit um diese Lehrstelle. Sehr gerne würde ich in Ihrem Unternehmen mit anpacken und die Ausbildung zum Logistiker EBA absolvieren.',
      textArea2PlaceHolder: 'Den Beruf des Logistikers habe ich bereits beim Schnuppern bei der Firma Logik AG kennengelernt. Dort merkte ich, dass ich mich für eine Ausbildung als Logistiker bewerben werde, da mir die Schnuppertage in diesem Beruf sehr gefallen haben.',
      textArea3PlaceHolder: 'Die Kontrolle und der Transport der Waren mit dem Gabelstapler bereiten mir grosse Freude. Auch der Kontakt mit Kunden gefällt mir. Ich arbeite gerne praktisch, packe mit an und erledige Aufträge konzentriert und zügig. Die Firma Logistik AG würde mir als Lehrbetrieb gefallen, da es ein familiäres Unternehmen ist.',
    }
  
    this.schnStepTwoData2 = {
      textArea1: '',
      textArea2: '',
      textArea3: '',
      textArea1PlaceHolder: 'Für die telefonische Auskunft vom 5. Januar danke ich Ihnen und bewerbe mich hiermit um eine Schnupperlehre als Logistiker.',
      textArea2PlaceHolder: 'Zurzeit besuche ich die 2. Sekundarschule Niveau C in Luzern. Meine Lieblingsfächer sind bildnerisches Gestalten und Sport. In meiner Freizeit spiele ich Fussball beim FC Muster.',
      textArea3PlaceHolder: 'Ich habe im Internet den Berufsbeschrieb gelesen und nun interessiere ich mich sehr für diesen Beruf. In der Schnupperlehre möchte ich nun den Berufsalltag eines Logistikers besser kennen lernen.',
     }
  
  
  
  
     this.lehrStepThreeData3 = {
      textArea4: '',
      textArea5: '',
      textArea6: '',
      textArea4PlaceHolder: 'Ich habe bereits bei Ihnen geschnuppert und es hat mir sehr gefallen. Ich möchte zu Ihnen, weil mir viele berichtet haben, dass die Lehrmeister sehr gut zu den Lehrlingen schauen und alle Lehrlinge, die ich kenne sehr gerne zur Arbeit kamen.',
      textArea5PlaceHolder: 'Gehe auf die Website der Firma. Schaue nach, welche Produkte oder Dienstleistungen von der Firma angeboten werden und notiere dies in dieses Feld hier.',
      textArea6PlaceHolder: 'Die Kontrolle und der Transport der Waren mit dem Gabelstapler bereiten mir grosse Freude. Auch der Kontakt mit Kunden gefällt mir. Ich arbeite gerne praktisch, packe mit an und erledige Aufträge konzentriert und zügig. Die Firma Logistik AG würde mir als Lehrbetrieb gefallen, da es ein familiäres Unternehmen ist.Ich habe bereits 4 Schnupperlehren gemacht: <br>  Positiv fand ich: Kundenkontakt, Team, Abwechslung. <br> Negativ fand ich: Bei zwei Betrieben durfte ich den ganzen Tag fast nur zusehen und nichts selber machen',
    }
  
    this.schnStepThreeData3 = {
      textArea4: '',
      textArea5: '',
      textArea6: '',
      textArea4PlaceHolder: 'Ich habe bereits bei Ihnen geschnuppert und es hat mir sehr gefallen. Ich möchte zu Ihnen, weil mir viele berichtet haben, dass die Lehrmeister sehr gut zu den Lehrlingen schauen und alle Lehrlinge, die ich kenne sehr gerne zur Arbeit kamen.',
      textArea5PlaceHolder: 'Gehe auf die Website der Firma. Schaue nach, welche Produkte oder Dienstleistungen von der Firma angeboten werden und notiere dies in dieses Feld hier.',
      textArea6PlaceHolder: 'Die Kontrolle und der Transport der Waren mit dem Gabelstapler bereiten mir grosse Freude. Auch der Kontakt mit Kunden gefällt mir. Ich arbeite gerne praktisch, packe mit an und erledige Aufträge konzentriert und zügig. Die Firma Logistik AG würde mir als Lehrbetrieb gefallen, da es ein familiäres Unternehmen ist.Ich habe bereits 4 Schnupperlehren gemacht: <br>  Positiv fand ich: Kundenkontakt, Team, Abwechslung. <br> Negativ fand ich: Bei zwei Betrieben durfte ich den ganzen Tag fast nur zusehen und nichts selber machen',
     }
  
  
     this.lehrStepFourData4 = {
      textArea7: '',
      textArea8: '',
      textArea9: '',
      textArea7PlaceHolder: 'Dass ich gut betreut werde und gerne zur Arbeit kommen werde.',
      textArea8PlaceHolder: 'Meine Stärken sind: Ich bin freundlich, hilfsbereit, pünktlich und fleissig. Meine Schwächen sind: Ich bin eher ruhig und zurückhaltend. Manchmal sage ich meine Meinung nicht.',
      textArea9PlaceHolder: 'Hier zählst du gute Beispiele aus deinen Schnupperlehren auf.',
    }
  
    this.schnStepFourData4 = {
      textArea7: '',
      textArea8: '',
      textArea9: '',
      textArea7PlaceHolder: 'Dass ich gut betreut werde und gerne zur Arbeit kommen werde.',
      textArea8PlaceHolder: 'Meine Stärken sind: Ich bin freundlich, hilfsbereit, pünktlich und fleissig. Meine Schwächen sind: Ich bin eher ruhig und zurückhaltend. Manchmal sage ich meine Meinung nicht.',
      textArea9PlaceHolder: 'Hier zählst du gute Beispiele aus deinen Schnupperlehren auf.',
     }
  
  
     this.lehrStepFiveData5 = {
      textArea13: '',
      textArea14: '',
      textArea15: '',
      textArea13PlaceHolder: 'Ich kann sehr gut im Team arbeiten. In der Schule haben wir im Projektunterricht oft in verschiedenen Gruppen gearbeitet und in der Freizeit spiele ich Basketball und dort ist Teamwork sehr wichtig.',
      textArea14PlaceHolder: 'In der Primarschule konnte ich nicht gut streiten und wurde teilweise sehr wütend. Heute verhalte ich mich in Konfliktsituationen ruhig und überlege immer zuerst was ich mache oder sage.',
      textArea15PlaceHolder: 'Ich spiele Basketball in der U15-Mannschaft im BSK Muster. In der Freizeit gehe ich gerne in die Stadt mit Freunden und in den Schulferien gehe oft mit meiner Familie nach Portugal, da ich ursprünglich von dort komme.',
    }
  
    this.schnStepFiveData5 = {
      textArea13: '',
      textArea14: '',
      textArea15: '',
      textArea13PlaceHolder: 'Ich kann sehr gut im Team arbeiten. In der Schule haben wir im Projektunterricht oft in verschiedenen Gruppen gearbeitet und in der Freizeit spiele ich Basketball und dort ist Teamwork sehr wichtig.',
      textArea14PlaceHolder: 'In der Primarschule konnte ich nicht gut streiten und wurde teilweise sehr wütend. Heute verhalte ich mich in Konfliktsituationen ruhig und überlege immer zuerst was ich mache oder sage.',
      textArea15PlaceHolder: 'Ich spiele Basketball in der U15-Mannschaft im BSK Muster. In der Freizeit gehe ich gerne in die Stadt mit Freunden und in den Schulferien gehe oft mit meiner Familie nach Portugal, da ich ursprünglich von dort komme.',
    }
  
  
  
    this.lehrStepSixData6 = {
      textArea16: '',
      textArea17: '',
      textArea18: '',
      textArea16PlaceHolder: 'Mein Vater arbeitet bei der Firma Muster AG und meine Mutter arbeitet drei Mal pro Woche in der Pflege. Ich habe keine Geschwister und meine Eltern unterstützen mich in der Schule.',
      textArea17PlaceHolder: 'Ich werde mit dem ÖV zur Arbeit fahren. Später möchte ich mir eventuell noch einen Roller kaufen, damit ich an schönen Tagen mit dem Roller zur Arbeit fahren kann.',
      textArea18PlaceHolder: 'Ich möchte meine Lehre erfolgreich abschliessen und dann viele Weiterbildungen machen und erfolgreich im Beruf sein. Ich möchte einmal eine eigenen Familie haben und in einer schönen Wohnung wohnen. ',
    }
  
    this.schnStepSixData6 = {
      textArea16: '',
      textArea17: '',
      textArea18: '',
      textArea16PlaceHolder: 'Mein Vater arbeitet bei der Firma Muster AG und meine Mutter arbeitet drei Mal pro Woche in der Pflege. Ich habe keine Geschwister und meine Eltern unterstützen mich in der Schule.',
      textArea17PlaceHolder: 'Ich werde mit dem ÖV zur Arbeit fahren. Später möchte ich mir eventuell noch einen Roller kaufen, damit ich an schönen Tagen mit dem Roller zur Arbeit fahren kann.',
      textArea18PlaceHolder: 'Ich möchte meine Lehre erfolgreich abschliessen und dann viele Weiterbildungen machen und erfolgreich im Beruf sein. Ich möchte einmal eine eigenen Familie haben und in einer schönen Wohnung wohnen. ',
    }
  }

  setLocalStorgeDataForCV() {
    let step = localStorage.getItem('step')
    if (step) {
      this.step = Number(step)
    }
    let personalData = localStorage.getItem('personalData')
    if (personalData) {
      this.personalData = JSON.parse(personalData)
    }
    let siblings = localStorage.getItem('siblings')
    if (siblings) {
      this.siblings = JSON.parse(siblings)
    }
    let schooling = localStorage.getItem('schooling')
    if (schooling) {
      this.schooling = JSON.parse(schooling)
    }
    let languages = localStorage.getItem('languages')
    if (languages) {
      this.languages = JSON.parse(languages)
    }
    let custLanguages = localStorage.getItem('custLanguages')
    if (custLanguages) {
      this.custLanguages = JSON.parse(custLanguages)
    }
    let hobbys = localStorage.getItem('hobbys')
    if (hobbys) {
      this.hobbys = JSON.parse(hobbys)
    }
    let trailApprentice = localStorage.getItem('trailApprentice')
    if (trailApprentice) {
      this.trailApprentice = JSON.parse(trailApprentice)
    }
    let references = localStorage.getItem('references')
    if (references) {
      this.references = JSON.parse(references)
    }
    let impressumContent = localStorage.getItem('impressumContent')
    if (impressumContent) {
      this.impressumContent = JSON.parse(impressumContent)
    }
  }

  setLocalStorgeDataForMS() {
    let msStep = localStorage.getItem('msStep')
    if (msStep) {
      this.msStep = Number(msStep)
    }

    let msType = localStorage.getItem('msType')
    if (msType) {
      this.msType = JSON.parse(msType)
    }

    let schreibst = localStorage.getItem('schreibst')
    if (schreibst) {
      this.schreibst = JSON.parse(schreibst)
    }

    let msPersonalForm = localStorage.getItem('msPersonalForm')
    if (msPersonalForm) {
      this.msPersonalForm = JSON.parse(msPersonalForm)
    }


    let lehrStepTwoData = localStorage.getItem('lehrStepTwoData')
    if (lehrStepTwoData) {
      this.lehrStepTwoData = JSON.parse(lehrStepTwoData)
    }

    let lehrStepThreeData = localStorage.getItem('lehrStepThreeData')
    if (lehrStepThreeData) {
      this.lehrStepThreeData = JSON.parse(lehrStepThreeData)
    }


    let schnStepTwoData = localStorage.getItem('schnStepTwoData')
    if (schnStepTwoData) {
      this.schnStepTwoData = JSON.parse(schnStepTwoData)
    }

    let schnStepThreeData = localStorage.getItem('schnStepThreeData')
    if (schnStepThreeData) {
      this.schnStepThreeData = JSON.parse(schnStepThreeData)
    }














    //sayem
    let lehrStepOneData = localStorage.getItem('schnStepOneData')
    if (lehrStepOneData) {
      this.lehrStepOneData = JSON.parse(lehrStepOneData)
    }

    // let schnStepOneData = localStorage.getItem('schnStepOneData')
    // if (schnStepOneData) {
    //   this.schnStepOneData = JSON.parse(schnStepOneData)
    // }
    let lehrStepTwoData2 = localStorage.getItem('lehrStepTwoData2')
    if (lehrStepTwoData2) {
      this.lehrStepTwoData2 = JSON.parse(lehrStepTwoData2)
    }
    let schnStepTwoData2 = localStorage.getItem('schnStepTwoData2')
    if (schnStepTwoData2) {
      this.schnStepTwoData2 = JSON.parse(schnStepTwoData2)
    }




    let lehrStepThreeData3 = localStorage.getItem('lehrStepThreeData3')
    if (lehrStepThreeData3) {
      this.lehrStepThreeData3 = JSON.parse(lehrStepThreeData3)
    }
    let schnStepThreeData3 = localStorage.getItem('schnStepThreeData3')
    if (schnStepThreeData3) {
      this.schnStepThreeData3 = JSON.parse(schnStepThreeData3)
    }



    let lehrStepFourData4 = localStorage.getItem('lehrStepFourData4')
    if (lehrStepFourData4) {
      this.lehrStepFourData4 = JSON.parse(lehrStepFourData4)
    }

    let schnStepFourData4 = localStorage.getItem('schnStepFourData4')
    if (schnStepFourData4) {
      this.schnStepFourData4 = JSON.parse(schnStepFourData4)
    }


    let lehrStepFiveData5= localStorage.getItem('lehrStepFiveData5')
    if (lehrStepFiveData5) {
      this.lehrStepFiveData5 = JSON.parse(lehrStepFiveData5)
    }
    let schnStepFiveData5 = localStorage.getItem('schnStepFiveData5')
    if (schnStepFiveData5) {
      this.schnStepFiveData5 = JSON.parse(schnStepFiveData5)
    }



    let lehrStepSixData6 = localStorage.getItem('lehrStepSixData6')
    if (lehrStepSixData6) {
      this.lehrStepSixData6 = JSON.parse(lehrStepSixData6)
    }
    let schnStepSixData6 = localStorage.getItem('schnStepSixData6')
    if (schnStepSixData6) {
      this.schnStepSixData6 = JSON.parse(schnStepSixData6)
    }


  }
}
