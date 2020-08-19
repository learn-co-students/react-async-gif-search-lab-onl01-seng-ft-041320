import React from 'react';

export default class GifSearch extends React.Component {

  state = {
    inputText: ""
  }

  handleOnChange = (e) => {
    this.setState({inputText: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getGifs(this.state.inputText)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputText} onChange={this.handleOnChange}/>
          <input type="Submit" value="Search Gifs" />
        </form>
      </div>
    )
  }
}
