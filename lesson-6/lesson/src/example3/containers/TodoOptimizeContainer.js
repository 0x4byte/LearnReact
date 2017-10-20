import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoChildOptimize from '../components/TodoChildOptimize'
import { setTodo, delTodo } from '../reducer'

class TodoContainer extends Component {
  static propTypes = {
    list: PropTypes.array,
    setTodo: PropTypes.func,
    delTodo: PropTypes.func
  }
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
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

      this.setState({ value: '' });
    }
  }

  handleDelClick = item => {
    const { delTodo } = this.props

    delTodo(item)
  }

  render() {
    const { value } = this.state;
    const { list } = this.props

    return (
      <div>
        <input
          value={value}
          onChange={this.handleChange}
          onKeyUp={this.handleAddClick} />

        {!!list.length &&
          list.map(item => (
            <TodoChildOptimize
              key={item.id}
              data={item}
              onClick={this.handleDelClick}
            />
          ))}
      </div>
    )
  }
}

export default connect(
  state => ({
    list: state.example3.list,
  }),
  { setTodo, delTodo }
)(TodoContainer)
