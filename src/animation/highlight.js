import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import VisibilitySensor from 'react-visibility-sensor';

class Highlight extends Component {
  constructor(props) {
    super(props);
    this.visibilityChange = this.visibilityChange.bind(this);
    this.state = { isVisible: false };
  }

  visibilityChange(isVisible) {
    let delay = 0;
    if (isVisible) delay = this.props.delay || 0;

    setTimeout(() => {
      this.setState({isVisible: isVisible});
    }, delay);
  }

  render () {
    const { isVisible } = this.state;

    return (
      <VisibilitySensor onChange={this.visibilityChange}>
        <CSSTransition
          in={isVisible}
          timeout={1000}
          classNames="highlight"
        >
          { this.props.children }
        </CSSTransition>
      </VisibilitySensor>
    )
  }
}

export default Highlight;
