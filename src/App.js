import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './components/data'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.img}
        location={item.location}
        country={item.country}
        dates={item.dates}
        desc={item.desc}
        cardMap={item.cardMap}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section>{cards}</section>
      <Footer />
    </div>
  )
}

export default App
