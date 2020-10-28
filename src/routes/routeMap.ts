import { lazy } from 'react';

const CreateNewitem = lazy(() => import(/* webpackChunkName: 'CreateNewitem'*/ '../pages/CreateNewItem'));
// import CreateNewitem from '../pages/CreateNewItem'

export default [
  {
    path: '/create-new-item',
    component: CreateNewitem
  }
];
