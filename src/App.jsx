import Hero from './components/Hero/Hero'
import Countdown from './components/Countdown/Countdown'
import Couple from './components/Couple/Couple'
import Events from './components/Events/Events'
import Venue from './components/Venue/Venue'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import WeddingQuote from './components/WeddingQuote/WeddingQuote'
import Closing from './components/Closing/Closing'
import FallingPetals from './components/FallingPetals/FallingPetals'
import Header from './components/Header/Header'

function App() {
  return (
    <main className="min-h-screen bg-[#faf3e8]">
      <Header/>
      <Hero />
      <Countdown />
      <Couple />
      <Events />
      <Venue />
      <WeddingQuote/>
      <Closing/>
      <FallingPetals/>
      <MusicPlayer />
    </main>
  )
}

export default App