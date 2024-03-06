import React from 'react'
import {Routes, Route} from 'react-router-dom'
import First from './first'
import Sport from './pages/sports'

function Home () {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<First/>}/>
                <Route path="/sport" element={<Sport/>}/>
            </Routes>
        </div>
    )
}

export default Home;