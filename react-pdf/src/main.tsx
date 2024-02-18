import React from 'react'
import ReactDOM from 'react-dom/client'

import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import Document from './Document.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <PDFViewer width="100%" height="100%" style={{ border: 'none', flex: 1 }}>
        <Document />
      </PDFViewer>
      <PDFDownloadLink document={<Document />} fileName="somename.pdf">
        {({ loading }) =>
          loading ? 'Loading document...' : <button style={{ position: 'fixed', bottom: 0, right: 0, marginRight: '2rem', marginBottom: '1rem' }}>Export PDF</button>
        }
      </PDFDownloadLink>
    </div>
  </React.StrictMode>,
)