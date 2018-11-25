import React from 'react';

import './Footer.scss';

export default () => {
  return (
    <div className='footer'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='order-2 order-md-1 col-12 col-md-6'>
            <div className='allrights'>
              &copy;2018 Bina Kim All Rights Reserved
            </div>
          </div>
          <div className='order-1 order-md-2 col-12 col-md-6'>
            <ul className="nav">
              <li className="col-3 col-md-4">
                <a className="nav-link" href="#">LinkedIn</a>
              </li>
              <li className="col-3 col-md-4">
                <a className="nav-link" href="#">Medium</a>
              </li>
              <li className="col-3 col-md-4">
                <a className="nav-link" href="#">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
