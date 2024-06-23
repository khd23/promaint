import {Country} from "./country";
import {EmployeeLocation} from "./location";

export interface Vendor {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  number: number;
  fax: string;
  webSite: string;
  street: string;
  city: string;
  state: string;
  postalCode: number;
  assignedWO: boolean;
  paymentType: string;
  type: string;
  laborRate: number;
  note: string;
  location: EmployeeLocation;
  country: Country;



}
