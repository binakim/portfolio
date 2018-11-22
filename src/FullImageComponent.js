import React from 'react';

export default (props) => {
  const style = {
    'background-image': `url(${props.src})`
  }

  return <div style={style} className={['imageWrapper fullImage', props.className].join(' ')}>
    <div />
  </div>;
}
