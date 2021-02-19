import React from 'react';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import {Hr} from './AppComponents'


const App = () => {
    return (
        <div>
            <Header/>
            <SectionOne></SectionOne>
            <Hr></Hr>
            <SectionTwo></SectionTwo>
        </div>
    )
}

export default App




