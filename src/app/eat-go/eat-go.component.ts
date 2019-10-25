import { Component, OnInit } from '@angular/core';
import { EatGoService } from '../eat-go.service';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eat-go',
  templateUrl: './eat-go.component.html',
  styleUrls: ['./eat-go.component.css']
})
export class EatGoComponent implements OnInit {
  rests;
  id;
  constructor(private route: ActivatedRoute,private EatGoApi: EatGoService, private myapp: AppComponent) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.EatGoApi.getRest(this.id).subscribe((data) => {
      console.log(data);
      this.rests = data['results'];
    })
  }

}
