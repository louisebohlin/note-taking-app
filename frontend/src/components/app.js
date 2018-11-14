import React from "react"
import Note from "./note/note.js"
import Form from "./form/form.js"
import "./../index.scss"

class App extends React.Component {

  constructor(props) {
    super(props)
    if (localStorage.getItem("userNotes")) {
      this.state = {
        items: JSON.parse(localStorage.getItem("userNotes"))
      }
    } else {
      this.state = {
        items: []
      }
    }
  }

  handleNewItem = newNote => {
    const Notes = this.state.items
    Notes.push({
      id: Date.now(),
      text: newNote
    })
    localStorage.setItem("userNotes", JSON.stringify(Notes))
    this.setState({
      items: Notes
    })
  }

  handleRemove = index => {
    const Notes = this.state.items
    Notes.splice(index, 1)
    this.setState({
      items: Notes
    })
    localStorage.setItem("userNotes", JSON.stringify(Notes))
  }

  render() {
    return (
      <div className="container">
        <div className="notes-form">
          <h1>My notes</h1>
          <Form onSubmit={this.handleNewItem} />
          {this.state.items.map((item, index) => (
            <Note
              index={index}
              key={item.id}
              text={item.text}
              handleRemove={this.handleRemove} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
