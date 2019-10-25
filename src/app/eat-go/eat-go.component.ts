import { Component, OnInit } from '@angular/core';
import { EatGoService } from '../eat-go.service';

@Component({
  selector: 'app-eat-go',
  templateUrl: './eat-go.component.html',
  styleUrls: ['./eat-go.component.css']
})
export class EatGoComponent implements OnInit {
  rests;
  constructor(private EatGoApi: EatGoService) { }

  ngOnInit() {
    this.EatGoApi.getRest().subscribe((data) => {
      console.log(data);
      this.rests = data['results'];
    })
  }

}
