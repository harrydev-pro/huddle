import Header from './Header.jsx'
import Section from './Section.jsx'
import Writeup from './Writeup.jsx'
import Footer from './Footer.jsx'
import './index.css'
import './App.css'

function App() {
  return (
    <div className="App">
     
      <Header />
      <div className='section'>
      <Section />
      <Writeup />
      </div>
      <Footer />
    </div>
  )
}


 
export default App
