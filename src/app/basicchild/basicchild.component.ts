import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-basicchild',
  templateUrl: './basicchild.component.html',
  styleUrls: ['./basicchild.component.css']
})
export class BasicchildComponent implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
