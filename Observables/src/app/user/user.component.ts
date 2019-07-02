import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  name="prasanna";
  constructor(private route: ActivatedRoute,
    private userservice:UserService,
    private router:Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }
  onclick(){
    this.router.navigate(['/'])
    this.userservice.emiter.emit(this.name);
  }
  onactivate(){
    this.userservice.Message(this.name);
    this.router.navigate(['/'])
  }


}
