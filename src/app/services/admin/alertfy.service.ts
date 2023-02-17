import {Injectable} from '@angular/core';

declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertfyService {

  constructor() {
  }

  message(message: string, options: Partial<AlertfyOptions>): void {
    alertify.set('notifier', 'position', options.position);
    alertify.set('notifier', 'delay', options.delaySecond);
    const msg = alertify[options.messageType](message);
    if (options.dismissOther) {
      msg.dismissOthers();
    }
  }

  dismiss() {
    alertify.dismissAll()
  }
}

export class AlertfyOptions {
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomRight;
  delaySecond: number = 3;
  dismissOther: boolean = false;
}

export enum MessageType {
  Succses = "success",
  Error = "error",
  Message = "message",
  Notify = "notify",
  Warning = "warning"
}

export enum Position {
  TopRight = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"

}
