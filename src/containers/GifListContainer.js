import React, {Component} from 'react';

import GifList from '../components/GifList'

import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{
    state = {
        gifsArr: []
    }

    stringParameterize(str1) {
        return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
    };
    
    fetchGifs = (event) => {
        let form = event.target
        event.preventDefault()
        const searchValue = document.getElementById('search-value').value
        const slugifiedSearchVal = this.stringParameterize(searchValue)
        form.reset()
        return fetch(`https://api.giphy.com/v1/gifs/search?q=${slugifiedSearchVal}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => this.setState({gifsArr: json.data.splice(0, 3)}, ()=> {console.log(this.state)}))
    }



    render(){
        return(
            <div>
                <GifSearch callback={this.fetchGifs}/>
                <GifList gifs={this.state.gifsArr}/>  
            </div>
            
        )
    }
}