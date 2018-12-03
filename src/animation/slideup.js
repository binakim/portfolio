import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import VisibilitySensor from 'react-visibility-sensor';

class SlideUp extends Component {
  constructor(props) {
    super(props);
    this.visibilityChange = this.visibilityChange.bind(this);
    this.state = { isVisible: false };
  }

  visibilityChange(isVisible) {
    console.log('visibility change detected');
    setTimeout(() => {
      this.setState({isVisible: isVisible});
    }, this.props.delay || 0);
  }

  render () {
    const { isVisible } = this.state;

    return (
      <VisibilitySensor onChange={this.visibilityChange}>
        <CSSTransition
          in={isVisible}
          timeout={1000}
          classNames="SlideUp"
        >
          { this.props.children }
        </CSSTransition>
      </VisibilitySensor>
    )
  }
}

export default SlideUp;
