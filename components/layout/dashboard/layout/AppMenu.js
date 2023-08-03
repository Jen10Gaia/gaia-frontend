import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);

  const model = [
    {
      label: 'Dashboard',
      items: [
        { label: 'Home', icon: 'pi pi-fw pi-home', to: '/admin/dashboard/' },
        { label: 'Users', icon: 'pi pi-fw pi-home', to: '/admin/dashboard/users' },
        {
          label: 'Work Visas',
          icon: 'pi pi-fw pi-briefcase',
          items: [
            {
              label: 'View All ',
              icon: 'pi pi-fw pi-circle',
              to: '/admin/dashboard/jobs/'
            },
            {
              label: 'Create New',
              icon: 'pi pi-fw pi-plus',
              to: '/admin/dashboard/jobs/new/'
            },

          ]
        },
        {
          label: 'Education Visas',
          icon: 'pi pi-fw pi-book',
          items: [
            {
              label: 'View All ',
              icon: 'pi pi-fw pi-circle',
              to: '/admin/dashboard/schools/'
            },
            {
              label: 'Create New',
              icon: 'pi pi-fw pi-plus',
              to: '/admin/dashboard/schools/new/'
            },

          ]
        },

      ]
    },

    {
      label: 'Pages',
      to: '/pages',
      items: [
        {
          label: 'Landing Page',
          icon: 'pi pi-fw pi-globe',
          to: '/'
        },

        {
          label: 'Work Visa Page',
          icon: 'pi pi-fw pi-briefcase',
          to: '/browse-work-visa-jobs'
        },
        {
          label: 'Education Visa Page',
          icon: 'pi pi-fw pi-book',
          to: '/browse-student-visa-scholarship'
        },

      ]
    },


  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
