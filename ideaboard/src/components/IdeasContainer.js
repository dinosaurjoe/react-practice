import React, { Component } from 'react'
import update from 'immutability-helper'
import axios from 'axios'
import Idea from './Idea'
import IdeaForm from './IdeaForm'




class IdeasContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ideas: [],
      editingIdeaId: null,
      notification: ''
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

  updateIdea = (idea) => {
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
    const ideas = update(this.state.ideas, {
      [ideaIndex]: { $set: idea }
    })
    this.setState({ideas: ideas,
    notification: 'All changes saved'})
  }

  resetNotification = () => {
    this.setState({notification: ''})
  }

  render() {
    return (
      <div>
        {this.state.ideas.map((idea) => {
          if(this.state.editingIdeaId === idea.id) {
            return(<IdeaForm
                      idea={idea}
                      key={idea.id}
                      updateIdea={this.updateIdea}
                      resetNotification={this.resetNotification}
                    />)
          } else {
            return (<Idea idea={idea}
                     key={idea.id}
                     updateIdea={this.updateIdea}
                     resetNotification={this.resetNotification}
                     />)
          }
        })}
        <button className="newIdeaButton"
          onClick={this.addNewIdea} >
          New Idea
        </button>

        <span className="notification">
        {this.state.notification}
        </span>
      </div>
    );
  }
}

export default IdeasContainer
