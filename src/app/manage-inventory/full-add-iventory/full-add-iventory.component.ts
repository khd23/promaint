import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {InvCategoryService} from "../../services/inv-category.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";
import {InventoryService} from "../../services/inventory.service";
import {AddIventoryComponent} from "../add-iventory/add-iventory.component";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-full-add-iventory',
  templateUrl: './full-add-iventory.component.html',
  styleUrls: ['./full-add-iventory.component.scss']
})
export class FullAddIventoryComponent {
  @ViewChild(AddIventoryComponent) addInventoryComponent : any;
  addInventoryForm!: FormGroup;
  constructor(  private router: Router , private invCategoryService: InvCategoryService,
                private _snackBar: MatSnackBar, private translateService: TranslateService, private inventoryService: InventoryService){}

  ngAfterViewInit() {
    this.addInventoryForm = this.addInventoryComponent.form.value;
     console.log("addInventoryForm", this.addInventoryForm.value)
  }

  cancel() {
    this.router.navigateByUrl('/inventory-list');
  }
}
