import React from 'react'
import ReactDOM from 'react-dom/client'

import { PDFViewer } from '@react-pdf/renderer'
import Document from './Document.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <PDFViewer width="100%" height="100%" style={{ border: 'none', flex: 1 }}>
        <Document />
      </PDFViewer>
    </div>
  </React.StrictMode>,
)