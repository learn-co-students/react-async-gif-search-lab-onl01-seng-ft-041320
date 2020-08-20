import React, {Component} from 'react';

import GifList from '../components/GifList'

import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{
    state = {
        gifsArr: []
    }

    //https://gist.github.com/codeguy/6684588
    stringParameterize(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
      
        // remove accents, swap ñ for n, etc
        let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        let to   = "aaaaeeeeiiiioooouuuunc------";
        for (let i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
    
        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes
    
        return str;
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