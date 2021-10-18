import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input() public contact!: {
    id: number;
    name: string;
    email: string;
    messagesCount: number;
  };

  @Input() public borderTop!: boolean;

  public getImageUrl(contactId: number): string {
    return `https://www.telerik.com/kendo-angular-ui-develop/components/listview/assets/contacts/${contactId}.png`;
  }

  public getMessagesText(messagesCount: number): string {
    return `${messagesCount} new message${messagesCount > 1 ? "s" : ""}`;
  }

}
