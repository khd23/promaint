import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, TableDirective} from "@coreui/angular";
// import {DocsComponentsModule} from "@docs-components/docs-components.module";
// import {MatCardModule} from "@angular/material/card";
// import {MatGridListModule} from "@angular/material/grid-list";
// import {MatInputModule} from "@angular/material/input";
// import {MatIconModule} from "@angular/material/icon";
// import {RouterLink} from "@angular/router";
// import {MatTableModule} from "@angular/material/table";


export interface PeriodicElement {
  id: number;
  name: string;
  work: string;
  project: string;
  priority: string;
  badge: string;
  budget: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Deep Javiya', work: 'Frontend Devloper', project: 'Flexy Angular', priority: 'Low', badge: 'badge-info', budget: '$3.9k' },
  { id: 2, name: 'Nirav Joshi', work: 'Project Manager', project: 'Hosting Press HTML', priority: 'Medium', badge: 'badge-primary', budget: '$24.5k' },
  { id: 3, name: 'Sunil Joshi', work: 'Web Designer', project: 'Elite Admin', priority: 'High', badge: 'badge-danger', budget: '$12.8k' },
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Critical', badge: 'badge-success', budget: '$2.4k' },
];

@Component({
  selector: 'app-equipements-lit',
  templateUrl: './equipements-lit.component.html',
  styleUrls: ['./equipements-lit.component.scss']
})
export class EquipementsLitComponent {
  displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget','actions'];
  dataSource = ELEMENT_DATA;
  search: boolean = false;
  constructor() {}


  ngOnInit(): void {
  }
}
