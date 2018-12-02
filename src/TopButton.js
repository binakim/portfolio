import React, { Component } from 'react';


class TopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {showTop: false};
    this.showScroll = this.showScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.showScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.showScroll);
  }

  showScroll(evt) {
    const top = window.scrollY;
	  if (top < 500 ) {
		  //Adds active class to make button visible
		  this.setState({showTop: false});
		}
		else {
		  this.setState({showTop: true});
		}
  }

  scroll() {
    window.scrollTo({
     top: 0,
     behavior: "smooth"
    })
  }

  render () {
    if (this.state.showTop) {
      return (
        <div id='topButton' className='topButton'>
          <i className="material-icons" onClick={this.scroll}>expand_less</i>
        </div>
      );
    }
    else {
      return <div />
    }
  }
}

export default TopButton;
