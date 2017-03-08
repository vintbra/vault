import React, {Component} from 'react'

export class Link extends Component {

  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  handleClick = (evt) => {
    evt.preventDefault()
    // history.pushState(null, '', this.props.to)
    this.context.linkHandler(this.props.to)
  }

  render() {
    return <a href="#" onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  to: React.PropTypes.string.isRequired
}