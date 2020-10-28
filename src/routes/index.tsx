import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../layout';
// import CreatNewItem from '../pages/createNewItem';
// const Layout = import('../layout')

const BasicRouter = () => (
  <>
    <Route path='/' component={Layout} />
  </>
);

export default BasicRouter;
