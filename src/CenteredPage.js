import React from 'react';

export default (props) => {
  return <div className='centerPage'>
    { props.children }
    <div className='next'>
      <i className="material-icons">expand_more</i>
    </div>
  </div>;
}
