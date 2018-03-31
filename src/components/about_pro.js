import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from './modal'
import { appStarted } from '../actions'

class AboutPro extends Component {
  render() {
    if (this.props.hide) {
      return <div />
    }

    console.log('AboutPro')
    return (
      <div>
        <div className="modal">
          <Modal>
            <h1>Modal content</h1>
            <button
              className="btn btn-secondary"
              onClick={this.props.appStarted}
            >
              Close
            </button>
          </Modal>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
    hide: state.memory.app_started
  }
}

export default connect(mapStateToProps, { appStarted })(AboutPro)
