import { createAction, props } from '@ngrx/store';
import {InventoryVendor} from "../../models/inventory-vendor";

export const getInvVendors = createAction(
    '[InventoryVendor] Get InvVendors Items',
);

export const emptyInvVendors = createAction(
    '[InventoryVendor] Empty InvVendors Items',
);

export const addInvVendor = createAction(
    '[InventoryVendor] Add InvVendor',
    props<{ inventoryVendor: InventoryVendor }>()
);

export const addAllInvVendors = createAction(
    '[InventoryVendor] Add All InvVendors',
    props<{ inventoryVendor: InventoryVendor[] }>()
);

export const removeInvVendor = createAction(
    '[InventoryVendor] Remove InvVendor',
    props<{ inventoryVendor: InventoryVendor }>()
);

