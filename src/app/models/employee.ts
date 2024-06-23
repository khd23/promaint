import {Warehouse} from "./warehouse";
import {EmployeeLocation} from "./location";

export interface Employee {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userName: string;
  password: string;
  status: string;
  drivingLicense: number;
  laborRate: number;
  allowWorkOrder: boolean;
  allowLogin: boolean;
  type: string;
  locations: EmployeeLocation[];
  warehouses: Warehouse[];
  defaultWarehouse:Warehouse;


}
