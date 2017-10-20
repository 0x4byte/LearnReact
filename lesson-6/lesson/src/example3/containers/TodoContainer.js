import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import TodoChildFunc from '../components/TodoChildFunc'
import TodoChildClass from '../components/TodoChildClass'
import { setTodo, delTodo } from '../reducer'

class TodoContainer extends Component {
  static propTypes = {
    list: PropTypes.array,
    setTodo: PropTypes.func,
    delTodo: PropTypes.func
  }
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleAddClick = event => {
    const { setTodo } = this.props
    const value = event.target.value

    if (!value) return

    if (event.keyCode === 13) {
      setTodo({
        id: new Date().getTime(),
        name: event.target.value
      })

      this.setState({ value: '' })
    }
  }

  handleDelClick = item => {
    const { delTodo } = this.props

    delTodo(item)
  }

  render() {
    const { value } = this.state
    const { list } = this.props

    return (
      <div>
        <input
          value={value}
          onChange={this.handleChange}
          onKeyUp={this.handleAddClick}
        />

        {!!list.length &&
          list.map(item => (
            <TodoChildClass
              key={item.id}
              name={item.name}
              onClick={() => this.handleDelClick(item)}
            />
          ))}
      </div>
    )
  }
}

export default connect(
  state => ({
    list: state.example3.list
  }),
  { setTodo, delTodo }
)(TodoContainer)
