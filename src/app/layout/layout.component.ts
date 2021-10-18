import { Component, OnInit } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from "@progress/kendo-angular-layout";


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public selected = "Users";

  public items: Array<DrawerItem> = [
    { text: "Users", icon: "k-i-user", selected: true },
    { separator: true },
    { text: "Messages", icon: "k-i-inbox" },
    { text: "Bookmarks", icon: "k-i-bookmark-outline" },
    { separator: true },
    { text: "Files", icon: "k-i-files" },
    { text: "Attachments", icon: "k-i-hyperlink-email" },
    // { text: "About", icon: "k-i-info" },
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }

}
