import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'virtual:uno.css'
import App from './App'
import { Inspector, InspectParams } from 'react-dev-inspector'
import { BrowserRouter as Router } from 'react-router-dom'

import '@unocss/reset/tailwind.css'

const isDev = process.env.NODE_ENV === 'development'
const inspectorHotKeys = (import.meta.env.VITE_DEV_INSPECTOR_HOTKEYS as string)?.split(' ') ?? ['ctrl', 'alt', 'i']

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>

    {isDev && (
      <Inspector
        // props see docs:
        // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
        keys={inspectorHotKeys}
        disableLaunchEditor={true}
        onClickElement={({ codeInfo }: InspectParams) => {
          if (!codeInfo?.absolutePath) return
          const { absolutePath, lineNumber, columnNumber } = codeInfo
          // you can change the url protocol if you are using in Web IDE
          return fetch(`${window.location.origin}/__open-in-editor?file=${absolutePath}:${lineNumber}:${columnNumber}`, {
            mode: 'no-cors'
          })
        }}
      />
    )}
  </React.StrictMode>,
)
