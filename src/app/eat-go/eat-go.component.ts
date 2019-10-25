import { Component, OnInit } from '@angular/core';
import { EatGoService } from '../eat-go.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-eat-go',
  templateUrl: './eat-go.component.html',
  styleUrls: ['./eat-go.component.css']
})
export class EatGoComponent implements OnInit {
  rests;
  place;
  constructor(private myapp: AppComponent,private EatGoApi: EatGoService) { }

  ngOnInit() {
    this.place = this.myapp.someThing;
    this.EatGoApi.getRest(this.place).subscribe((data) => {
      console.log(data);
      this.rests = data['results'];
    })
  }

}
