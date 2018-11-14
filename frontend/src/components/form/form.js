import React from "react"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newNote: ""
    }
  }
    handleChange = event => {
      this.setState({
        newNote: event.target.value
      })
    }
    handleSubmit = event => {
      event.preventDefault()
      this.props.onSubmit(this.state.newNote)
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="New Note"
              value={this.state.newNote}
              onChange={this.handleChange} />
            <button>Add</button>
          </form>
        </div>
      )
    }
}

export default Form
