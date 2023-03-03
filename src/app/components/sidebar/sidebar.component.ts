import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  sidebarlist: any = [
    {
      label: "Dashboard",
      link: "/dashboard",
      active:false
    }, 
    {
      label: "Products",
      link: "/products",
      active: true
    },
    {
      label: "Orders",
      link: "/orders",
      active: false
    },
    {
      label: "Users",
      link: "/users",
      active: false
    }
  ]
  constructor(){}

  changeRoute(index: number){
    this.sidebarlist.forEach((item: any, i:number) =>{
      this.sidebarlist[i].active =false;
    });
    this.sidebarlist[index].active = true;
  }

  ngOnInit(): void {
    
  }
}
