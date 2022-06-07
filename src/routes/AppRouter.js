import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Timer from '../container/Timer'
import { GlobalStyles } from '../styles/StylesGlobal'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Routes>
                {/* Ruta pública */}
                <Route path='/' element={<Timer />} />
                {/* Redireccionamiento */}
                <Route path='*' element={<Navigate to={'/'}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter