import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import VisibilitySensor from 'react-visibility-sensor';

class SlideUp extends Component {
  constructor(props) {
    super(props)
    this.onScroll = this.onScroll.bind(this);
    this.myRef = React.createRef()
    this.state = {scrollTop: 0}
  }

  onScroll = () => {
     const scrollTop = this.myRef.current.scrollTop
     console.log(`myRef.scrollTop: ${scrollTop}`)
     this.setState({
        scrollTop: scrollTop
     })
  }

  render() {
    const {
      scrollTop
    } = this.state
    const { children } = this.props;

    console.log('rendering with scroll');

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, 
        {
          ref: this.myRef,
          onScroll: this.onScroll
        
        })
    );

    return childrenWithProps;
  }
}

export default SlideUp;
