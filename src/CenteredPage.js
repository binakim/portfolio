import React from 'react';

export default (props) => {
  return <div className={props.className}>
    <div className='introTop' />
    { props.children }
    <div className='introBottom'>
      <i className="material-icons">expand_more</i>
    </div>
  </div>;
}
