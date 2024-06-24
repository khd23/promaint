import {InvCategory} from "./inv-category";


export interface Inventory {
  id: number;
  name : string ;
  reference: string ;
  description : string ;
  unitType:string;
  category:InvCategory
}
