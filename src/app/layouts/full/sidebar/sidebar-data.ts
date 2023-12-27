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
    route: '/ui-components/menu',
  },
  {
    displayName: 'Factures',
    iconName: 'file-dollar',
    route: '/ui-components/tooltips',
  },
  {
    displayName: 'Employés',
    iconName: 'users-group',
    route: '/authentication/login',
  },
  {
    displayName: 'Vendeurs',
    iconName: 'building',
    route: '/authentication/register',
  },
  {
    displayName: 'Calendrier',
    iconName: 'calendar',
    route: '/calendar',
  },
  // {
  //   displayName: 'Sample Page',
  //   iconName: 'aperture',
  //   route: '/extra/sample-page',
  // },
];
