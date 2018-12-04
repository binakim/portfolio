import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

class TopButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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

export default TopButton;
