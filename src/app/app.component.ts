import { Component } from '@angular/core';
import { ApiCallService } from './shared/service/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemantFrontEnd';

  constructor(private apiCallService : ApiCallService ){}

  ngOnInit(): void {

  }


}
