import React from 'react'
import ReactDOM from 'react-dom/client'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import Document from '@/pages/Document.tsx'
import Card from '@/pages/Card'
import '@/index.css'
import { colorVars } from '@/lib/utils.ts'

const root = document.documentElement
root.style.setProperty('--theme-color', colorVars.primaryColor)

const files = [
  {
    name: 'Document',
    component: <Document />,
    fileName: 'mackgame4_cv.pdf'
  },
  {
    name: 'Card',
    component: <Card />,
    fileName: 'mackgame4_card.pdf'
  }
]

export default function App() {
  const [selectedFile, setSelectedFile] = React.useState(files[0])

  const handleChangeFile = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const selected = files.find(file => file.name === selectedName) || files[0];
    setSelectedFile(selected);
  };
  
  return (
    <React.StrictMode>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div id="controlPanel" style={{ position: 'fixed', bottom: '1rem', right: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <select title="Select file" defaultValue={selectedFile.name} onChange={handleChangeFile} style={{ width: '100%', marginBottom: 10 }}>
            {files.map(file => (
              <option key={file.name} value={file.name}>{file.name}</option>
            ))}
          </select>
          <PDFDownloadLink document={selectedFile.component} fileName={selectedFile.fileName}>{({ loading }) => loading ? null : <button style={{ width: '100%' }}>Export PDF</button>}</PDFDownloadLink>
        </div>
        <PDFViewer width="100%" height="100%" style={{ border: 'none', flex: 1 }}>
          {selectedFile.component}
        </PDFViewer>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)