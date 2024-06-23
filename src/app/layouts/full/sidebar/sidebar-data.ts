import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Accueil',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Menu',
  },
  {
    displayName: 'Equipments',
    iconName: 'database-cog',
    route: '/equipements-list',
  },
  {
    displayName: 'Ordre de travail',
    iconName: 'checkup-list',
    route: '/maintenances-list',
  },
  {
    displayName: 'Inventaires',
    iconName: 'box',
    route: '/inventory-list',
  },
  {
    displayName: 'Achat',
    iconName: 'shopping-cart',
    route: '/purchasing-list',
  },
  {
    displayName: 'Factures',
    iconName: 'file-dollar',
    route: '/invoces-list',
  },
  {
    displayName: 'Employés',
    iconName: 'users-group',
    route: '/employees-list',
  },
  {
    displayName: 'Vendeurs',
    iconName: 'building',
    route: '/vendors-list',
  },
  {
    displayName: 'Calendrier',
    iconName: 'calendar',
    route: '/calendar',
  },
  {
    displayName: 'location',
    iconName: 'map-pin-check',
    route: '/locations-list',
  },
  {
    displayName: 'warehouses',
    iconName: 'building-store',
    route: '/warehouses-list',
  },


  {
    displayName: 'inventCategories',
    iconName: 'category-2',
    route: '/inv-category-list',
  },
  // {
  //   displayName: 'Sample Page',
  //   iconName: 'aperture',
  //   route: '/extra/sample-page',
  // },
];
