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
  locations: any[];
  warehouses: any[];
  defaultWarehouse:any;


}
