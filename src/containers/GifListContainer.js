import React from 'react' 

import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g').then(resp => resp.json()).then(obj => this.setState({gifs: [obj.data[0], obj.data[1], obj.data[2]]}))
    }

    fetchFromSearch = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`).then(resp => resp.json()).then(obj => {
            let gifs = obj.data;
            this.setState({gifs: gifs})
        })
    } 

    render() {
        return (
            <div>
                <GifSearch handleSearch={this.fetchFromSearch} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;