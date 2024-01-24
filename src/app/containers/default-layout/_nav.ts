import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    title: true,
    name: 'Management'
  },
  {
    name: 'Users',
    url: '/dashboard/users',
    iconComponent: { name: 'cil-user' }
  },

  {
    name: 'Settings',
    url: '/dashboard/settings',
    iconComponent: { name: 'cil-settings' }
  },

];
