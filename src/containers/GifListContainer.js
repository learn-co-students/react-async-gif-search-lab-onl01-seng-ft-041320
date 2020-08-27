import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return (
        // Render a <GifSearch> component that renders the form
            <div>
                <GifSearch fetchData={this.fetchData} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    componentDidMount() {
        this.fetchData() 
    }

    // Fetch data from API
    // Store the first 3 returned
    fetchData = (query) => {
       fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
       .then(res => res.json())
       .then(({data}) => {
           this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }))})
       })
   }

}

export default GifListContainer 

// Pass down to <GifList> component as a prop
// Pass down a submit handler function to <GifSearch/>