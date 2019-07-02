import { Component } from '@angular/core';
import { ServerServiceService } from './server-service.service';
// import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpRequest';
  constructor(private serverservice:ServerServiceService){}
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver', 
      capacity: 100,
      id: this.generateId()
    }
  ];
  AppName=this.serverservice.getApplicationName()
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  onsave(){
    this.serverservice.storeServers(this.servers).subscribe(
      (res)=>{console.log(res)},
      (err)=>{console.log(err)}
    )
  }
  // GetData(){
  //   this.serverservice.getservers().subscribe(
  //     (res:Response)=>{
  //       const data=res.json();
  //       console.log(data);
  //     },
  //     (err)=>{console.log(err)}
  //   )
  // }


  GetData(){
    this.serverservice.getservers().subscribe(
      (result:any[])=>{
        this.servers=result;
      },
      (err)=>{console.log(err)}
    )
  }


}
