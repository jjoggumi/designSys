import { createWebHistory, createRouter } from "vue-router";

import DesignSystem from '@/views/DesignSystem';
import FoundationPage from '@/views/page/foundation/Foundation';
import Color from '@/views/page/foundation/Color';
import Typography from '@/views/page/foundation/Typography';
import Icon from '@/views/page/foundation/Icon';
import Grid from '@/views/page/foundation/Grid';
import Breakpoints from '@/views/page/foundation/Breakpoints';

import FormPage from '@/views/page/form/Forms';
import Form from '@/views/page/form/Form';
import Checks from '@/views/page/form/Checks';

import ComponentsPage from '@/views/page/components/Components';
import Button from '@/views/page/components/Button';
import Modal from '@/views/page/components/Modal';
import Dropdown from '@/views/page/components/Dropdown';
import Collapse from '@/views/page/components/Collapse';
import Tab from '@/views/page/components/Tab';
import Alerts from '@/views/page/components/Alerts';
import Table from '@/views/page/components/Table';


const routes = [
  {
    path: '/',
    name : 'Design System',
    component : DesignSystem,
  },
  {
    path: '/foundation',
    name : 'Foundation',
    component : FoundationPage,
    children:[          
      {
        path: 'color',
        name : 'Color',
        component : Color,
      },{
        path: 'typography',
        name : 'Typography',
        component : Typography,
      },{
        path: 'icon',
        name : 'Icon',
        component : Icon,
      },{
        path: 'grid',
        name : 'Grid',
        component : Grid,
      },{
        path: 'breakpoints', 
        name: 'Breakpoints',
        component: Breakpoints,
      }
    ]
  },{
    path: '/form',
    name : 'Form',
    component : FormPage,
    children:[          
      {
        path: 'form',
        name : 'Form',
        component : Form,
      },{
        path: 'checks',
        name : 'Checks & Radios & Swiches',
        component : Checks,
      }
    ]
  },{
    path: '/components',
    name: 'Components',
    component: ComponentsPage,
    children: [
      {
        path: 'button', 
        name: 'Button',
        component: Button,
      },{
        path: 'modal', 
        name: 'Modal',
        component: Modal,
      },{
        path: 'dropdown', 
        name: 'Dropdown',
        component: Dropdown,
      },{
        path: 'collapse', 
        name: 'Collapse',
        component: Collapse,
      },{
        path: 'tab', 
        name: 'Tab',
        component: Tab,
      },{
        path: 'alerts', 
        name: 'Alerts',
        component: Alerts,
      },{
        path: 'table', 
        name: 'Table',
        component: Table,
      }
    ]
  }
];
  
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 