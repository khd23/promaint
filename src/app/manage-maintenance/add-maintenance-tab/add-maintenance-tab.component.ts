import { Component } from '@angular/core';

@Component({
  selector: 'app-add-maintenance-tab',
  templateUrl: './add-maintenance-tab.component.html',
  styleUrls: ['./add-maintenance-tab.component.scss']
})
export class AddMaintenanceTabComponent {
  dataSource:any = [{maintenance: 'Tire rotation', total:'250$'}]
  displayedColumns: string[] = ['maintenance', 'total', 'complete','actions'];

}
