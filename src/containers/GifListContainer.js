  
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state ={
        gifs: [],
        search: ""
    }

    handleChange = e => {
        this.setState({ search: e.target.value });
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchGifs();
    }

    fetchGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
          .then(res => res.json())
          .then(json => {
            const gifs = JSON.parse(JSON.stringify(json.data)).slice(0, 3); //selected from start to end (end not included) 
            this.setState({ gifs })
          })
      }

    render(){
        return(
            <div id="gif-list-container">
            <GifSearch search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}

export default GifListContainer