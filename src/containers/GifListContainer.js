import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    logState = () =>{
    console.log(this.state.gifs.map(gif => gif));
    // console.log(this.state.gifsObj);
}
     render () {
        return(
            <div>
                {/* {this.logState()} */}
                <GifSearch fetchGIFS={this.fetchGIFS} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }


fetchGIFS = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=SNCUg3c6cRar0gVYDwVuEbycYjSeTSiL&rating=g&limit=3`)
    .then(res => res.json())
    .then(({data}) => {
        this.setState({ gifs: data.map(gif => ({url: gif.images.original.url}) ) })
        })
    }

componentDidMount() {
this.fetchGIFS() 
        
}
    
}

export default GifListContainer;


//fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=SNCUg3c6cRar0gVYDwVuEbycYjSeTSiL&rating=g')
// .then((response) => response.json())
// .then((gifs) => 
//     this.setState({
//         gifsObj: gifs.data
//     }));