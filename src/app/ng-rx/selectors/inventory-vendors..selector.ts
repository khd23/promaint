import { createSelector } from '@ngrx/store';
import {InventoryVendor} from "../../models/inventory-vendor";

export const selectFeature = (state :   InventoryVendor[]) => state;

export const prescriptionSelector = createSelector(
  selectFeature,
  (state) => state
);
