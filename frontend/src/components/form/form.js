import React from "react"
import "./form.scss"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: ""
    }
  }
    handleChange = event => {
      this.setState({
        title: event.target.value
      })
    }

    handleBodyChange = event => {
      this.setState({
        body: event.target.value
      })
    }
    handleSubmit = event => {
      event.preventDefault()
      this.props.onSubmit(this.state.title, this.state.body)
    }
    render() {
      return (
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Note Title"
              value={this.state.title}
              onChange={this.handleChange} />
            <textarea
              placeholder="Note Content"
              onChange={this.handleBodyChange}>{this.state.body}
            </textarea>
            <button>Add</button>
          </form>
        </div>
      )
    }
}

export default Form
