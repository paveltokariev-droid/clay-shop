import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import CollectionsPage from './pages/CollectionsPage.tsx'
import ArtistsPage from './pages/ArtistsPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/artists" element={<ArtistsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)