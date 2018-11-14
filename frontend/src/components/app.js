import React from "react"
import Note from "./note/note.js"
import Form from "./form/form.js"
import ".././index.scss"

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

  handleNewItem = (title, body) => {
    const Notes = this.state.items
    Notes.push({
      id: Date.now(),
      title,
      body
    })
    localStorage.setItem("userNotes", JSON.stringify(Notes))
    this.setState({
      items: Notes
    })
  }

  handleRemove = index => {
    const notes = this.state.items
    notes.splice(index, 1)
    this.setState({
      items: notes
    })
    localStorage.setItem("userNotes", JSON.stringify(notes))
  }

  handleItemClick = id => {
    this.setState({
      selectedItemID: id
    })
  }

  render() {
    const selectedNote = this.state.items.find(note => note.id === this.state.selectedItemID)
    return (
      <div className="container">
      <ul className="noteslist">
          {this.state.items.map((item, index) => (
            <li onClick={() => this.handleItemClick(item.id)}>{item.title}</li>
        ))}
      </ul>
        <div className="notes-form">
          <h1>My notes</h1>
          <Form onSubmit={this.handleNewItem} />
          {selectedNote && <Note id={selectedNote.id} title={selectedNote.title} body={selectedNote.body} />}
        </div>
      </div>
    )
  }
}

export default App
