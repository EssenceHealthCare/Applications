import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/auth-api';

@Component({
  selector: 'care-web-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  values: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.values().subscribe((data) => {
      this.values = data;
    });
  }
}
