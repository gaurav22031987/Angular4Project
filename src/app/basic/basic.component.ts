import { Component, OnInit } from '@angular/core';
import { sampleData } from './sample-data';
import { SampleModel } from './sample.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({ selector: 'hello-world', template: 'Hello World!' })
export class HelloWorld {
}

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  entryComponents: [HelloWorld]
})
export class BasicComponent implements OnInit {
  sampleDataUrl = 'assets/sample-data.json';
  sampleData: SampleModel[] = sampleData;
  HelloWorld = HelloWorld;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    /**
     * Earlier way of sending search parameter to http request
     * const params = new URLSearchParams();
     * params.append('id', '1');
     * this.http.get<SampleModel[]>(this.sampleDataUrl, { search: params });
     */

    /**
     * New Way of sending search parameter
     */
    let paramsnew = new HttpParams().set('id', '1');
    this.http.get<SampleModel[]>(this.sampleDataUrl, { params: paramsnew }).subscribe((data: SampleModel[]) => {
    });
    
  }

}



