import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Counter from './components/Counter.jsx'
import NameInput from './components/NameInput.jsx'
import CounterApp from './components/CounterApp.jsx'
import BasicList from './components/BasicList.jsx'
import TailwindCssTest from './components/TailwindCssTest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Counter></Counter>
    <NameInput></NameInput>
    <CounterApp></CounterApp
    <BasicList></BasicList>*/}
    <TailwindCssTest></TailwindCssTest>
  </StrictMode>,
)
