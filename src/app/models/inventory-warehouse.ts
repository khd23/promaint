import {Vendor} from "./vendor";


export interface InventoryVendor {
  id: number;
  barCode : number ;
  vendorPart: string ;
  vendor:Vendor
}
