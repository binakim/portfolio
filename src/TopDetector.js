import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

class TopDetector extends Component {
  constructor(props) {
    super(props);
    this.visibilityChange = this.visibilityChange.bind(this);
    this.scrollButton = null;
  }

  componentDidMount() {
    this.scrollButton = document.getElementById('TopDetector');
  }

  visibilityChange(isVisible) {
    console.log(isVisible);
    this.props.dispatch({showTopButton: !isVisible});
	}

  render () {
    return (
      <div>
        <VisibilitySensor onChange={this.visibilityChange}>
          <div className='firstPage'/>
        </VisibilitySensor>
      </div>
    );
  }
}

export default TopDetector;
