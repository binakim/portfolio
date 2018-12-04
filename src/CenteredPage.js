import React from 'react';


export default (props) => {
  return <div className={props.className}>
    <div className='introTop' />
    { props.children }
    <div className='introBottom'>
      <div class='icon-scroll'>
        <div class="icon-scroll-screen"></div>
      </div>
    </div>
  </div>;
}
