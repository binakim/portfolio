import React from 'react';

export default (props) => {
  return <div className={props.className}>
    { props.children }
    <i className="material-icons">expand_more</i>
  </div>;
}
