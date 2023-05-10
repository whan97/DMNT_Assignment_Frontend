import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { ApiCallService } from 'src/app/shared/service/api-call.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})
export class DisplayUsersComponent implements OnInit {
   dataSource: User[] = []
   displayedColumns: string[] = ['name', 'country', 'birthDate', 'userName', 'status']

  constructor(private apiCallService : ApiCallService ){}

  ngOnInit(): void {
    this.apiCallService.getValues().subscribe(x => this.dataSource = x)
    console.log(this.dataSource)
  }
}
