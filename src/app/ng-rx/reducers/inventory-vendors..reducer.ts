import { createReducer, on } from '@ngrx/store';
import {InventoryVendor} from "../../models/inventory-vendor";
import {
  addAllInvVendors,
  addInvVendor,
  emptyInvVendors,
  getInvVendors,
  removeInvVendor
} from "../actions/prescription.actions";



export const initialState: InventoryVendor[]=[];

export const prescriptionReducer = createReducer(
  initialState,
  on(getInvVendors, (state) => ({
    ...state
  })),
  on(emptyInvVendors, (state, action) => {
    const inventoryVendors = [...state];
    inventoryVendors.splice(0, inventoryVendors.length);

    state = inventoryVendors;

    return state;
  }),

  on(addInvVendor, (state, action) => {
    console.log("addReducer",action.inventoryVendor)
    state = [...state, action.inventoryVendor]

    console.log("Reducer",state)
    return state;
  }),
  on(addAllInvVendors, (state, action) => {
    console.log("addReducer",state)
    state = [...state, ...action.inventoryVendor]

    console.log("Reducer",state)
    return state;
  }),
  on(removeInvVendor, (state, action) => {
    const inventoryVendors = [...state];
    const index = inventoryVendors.findIndex(x => x.id === action.inventoryVendor.id);
    inventoryVendors.splice(index, 1);

    state = inventoryVendors

    return state;
  }),

);
