import { Visit } from './../models/Visit';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }


  public getVisits(): Visit[] {

    const v1Date = new Date();
    v1Date.setDate(10);
    v1Date.setMonth(3);
    const v2Date = new Date();
    v2Date.setDate(20);
    v2Date.setMonth(5);
    const v3Date = new Date();
    v3Date.setDate(2);
    v3Date.setMonth(1);
    const v4Date = new Date();
    v4Date.setDate(30);
    v4Date.setMonth(4);
    const v5Date = new Date();
    v5Date.setDate(23);
    v5Date.setMonth(1);

    const v1 = new Visit('Primera capacitaciòn', 'Cristian Bolije Jonshich',
      'Ice Frog', 'Se realizo la capacitaciòn con éxito', v1Date);
    const v2 = new Visit('Presentaciòn de marketing', 'Wally West', 'Part Inc', 'Presentación éxitosa', v2Date);
    const v3 = new Visit('MVP', 'Jhon Titor', 'Blizzard', 'Se iniciaron las negociaciones', v3Date);
    const v4 = new Visit('Reuniòn mensual', 'Jhon Bandicoot', 'Beenox', 'Se evaluo el rendimiento del producto', v4Date);
    const v5 = new Visit('Presentación comercial', 'Cristian Bolije Jonshich', 'Naughty Dog',
                          'Se concluyó con la compra del producto', v5Date);
    const visits: Visit[] = [];
    visits.push(v1);
    visits.push(v2);
    visits.push(v3);
    visits.push(v4);
    visits.push(v5);

    return visits;
  }

}
