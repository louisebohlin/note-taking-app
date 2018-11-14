import React from "react"

class Note extends React.Component {

    handleRemoveNote = e => {
      e.preventDefault()
      this.props.handleRemove(this.props.id)
    }
    render() {
      return (
        <div className="note-div">
          <h4>{this.props.title}</h4>
          <p>{this.props.body}</p>
          <button onClick={this.handleRemoveNote}>Remove</button>
        </div>
      )
    }

}

export default Note
