import React from 'react'
import { Layout } from 'antd';
import MainContent from './content'
import MainHeader from './header'
import './index.less'

function BaseLayout() {
    return (
        <Layout>
            <MainHeader ></MainHeader>
            <Layout style={{ padding: '0 24px 24px' }}>
                <MainContent></MainContent>
            </Layout>
        </Layout>
    )
}
export default BaseLayout