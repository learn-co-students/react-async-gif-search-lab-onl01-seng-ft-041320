import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App

// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=mR62nGby7OIUuuBhv6PRTluf9af2knPt&rating=g
