import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <MantineProvider >
      <App />
    </MantineProvider>
  // </React.StrictMode>,
)
