import React, { Component } from 'react'
import update from 'immutability-helper'
import axios from 'axios'
import Idea from './Idea'



class IdeasContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ideas: [],
      editingIdeaId: null
    }
  }

  componentDidMount() {
    axios.get('http:/' + '/localhost:3001/api/v1/ideas.json')
    .then(response => {
      console.log(response)
      this.setState({ideas: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewIdea = () => {
    axios.post(
      'http:/' + '/localhost:3001/api/v1/ideas',
      { idea:
        {
          title: '',
          body: ''
        }
      }
    )
    .then(response => {
      const ideas = update(this.state.ideas, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        ideas: ideas,
        editingIdeaId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.ideas.map((idea) => {
          return (<Idea idea={idea} key={idea.id} />)
        })}
        <button className="newIdeaButton"
          onClick={this.addNewIdea} >
          New Idea
        </button>
      </div>
    );
  }
}

export default IdeasContainer
