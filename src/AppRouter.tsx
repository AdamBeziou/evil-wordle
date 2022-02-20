import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom"
import Home from './Components/Home'
import { BASE_URL, BASIC_GAME } from './Routes'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={BASE_URL} element={<Home />} />
                <Route path={BASIC_GAME} element={<p>Test</p>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter