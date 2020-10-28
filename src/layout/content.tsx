import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import routeMap from '../routes/routeMap';

const { Content } = Layout;

function MainContent() {
  return (
    <Content>
      <div className='main-content'>
        <Suspense fallback={<div>Loading...</div>}>
          {routeMap.map((router) => {
            return <Route path={router.path} key={router.path} component={router.component} />;
          })}
        </Suspense>
      </div>
    </Content>
  );
}

export default MainContent;
