import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions'
import { Link } from 'react-router'

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title'
    //validate: () => {  }
  },
  categories: {
    type: 'input',
    label: 'Categories'
  },
  content: {
    type: 'textarea',
    label: 'Content'
  }
}
//['title', 'categories', 'content']

class PostsNew extends Component {
  //this.context only router
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(form_props) {
    this.props.createPost(form_props).then(() => {
      //blog post has been created, navigate to the index
      this.context.router.push('/')
    })
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field]
    return (
      <div
        key={fieldConfig.label}
        className={`form-group ${
          fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''
        }`}
      >
        <label>{fieldConfig.label}</label>
        <fieldConfig.type
          type="text"
          className="form-control"
          {...fieldHelper}
        />
        <div className="text-help">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>

        {_.map(FIELDS, this.renderField.bind(this))}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`
    }
  })

  return errors
}

//connect: first argument is mapSrareToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm(
  {
    form: 'PostsNewForm',
    fields: _.keys(FIELDS),
    validate
  },
  null,
  { createPost }
)(PostsNew)
