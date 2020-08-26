import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

    state = {
        gifs: [],
        search: ''
    }

    handleChange = e => {
        this.setState({ search: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.fetchGifs();
    }

    fetchGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=mR62nGby7OIUuuBhv6PRTluf9af2knPt&rating=g`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                const gifs = JSON.parse(JSON.stringify(json.data)).slice(0, 3); //selected from start to end (end not included) 
                this.setState({ gifs })
            })
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }

}

export default GifListContainer;