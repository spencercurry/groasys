/**
 * Created by stcurry on 5/20/17.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: 10;
  serverStatus: 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
