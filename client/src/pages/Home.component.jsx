import Search from '../component/Search/Search.component'
import CardSlider from '../component/Slider/Slider.component'
import LocationCard from '../component/LocationCard/LocationCard.component'
import CommentCard from '../component/CommentCard/CommentCard.component'
import './Home.styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CardSlider2 from '../component/Slider/Slider.component copy'

const Home = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    const getLocations = async () => {
      const locations = await axios.get(`http://localhost:3001/api/location`)
      console.log(locations.data)
      setLocations(locations.data)
    }
    getLocations()
  }, [])

  console.log(locations.Comments)

  return (
    <div className="Home-container">
      <h1>Find places to stay on .ThisSite</h1>
      <p>Discover entire homes and private rooms perfect for any trip.</p>
      <Search />
      <CardSlider locationCard={LocationCard} Locations={locations} />
      <CardSlider2 commentCard={CommentCard} Locations={locations} />
    </div>
  )
}

export default Home
