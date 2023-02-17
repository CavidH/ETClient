import {Component, OnInit} from '@angular/core';
import {AlertfyService, MessageType} from "../../services/admin/alertfy.service";


//import {alertify} from "alertify";

// import {alertify} from "alertify";
//  import {Alertify} from "Alertify";

///<reference path="../../../../node_modules/@types/jquery/index.d.ts"/>
/*///<reference path="../../../../node_modules/@types/alertify/index.d.ts"/>
*/


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(private alertfy: AlertfyService) {
  }

  ngOnInit(): void {

  }

  dis() {
    this.alertfy.dismiss()
  }

  crt() {


    this.alertfy.message("salammm", {
      messageType: MessageType.Error
    })
  }

}
