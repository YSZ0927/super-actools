import React from 'react'
import Layout from '../layout'
import {Route} from "react-router-dom";

const BasicRouter = () => (
    <>
        <main>
            <Route path="/" exact component={Layout}/>
        </main>
    </>
);


export default BasicRouter;
