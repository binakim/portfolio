import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { withRouter } from "react-router-dom";

class TopButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (this.props.location !== prevProps.location) {
      this.handleClick();
    }
  }

  handleClick() {
    this.props.target.current.scrollTop = 0;
  }

  render () {
    const classNames = ['topButton']
    if (!this.props.showTopButton) {
      classNames.push('hide');
    }

    return <div id='topButton' className={classNames.join(' ')}>
      <i className="material-icons" onClick={this.handleClick}>expand_less</i>
    </div>
  }
}

export default withRouter(TopButton);
