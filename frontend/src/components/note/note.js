import React from "react"

class Note extends React.Component {

    handleRemoveNote = e => {
      e.preventDefault()
      this.props.handleRemove(this.props.index)
    }
    render() {
      return (
        <div className="note-div">
          <p>{this.props.text}</p>
          <button onClick={this.handleRemoveNote}>Remove</button>
        </div>
      )
    }

}

export default Note
