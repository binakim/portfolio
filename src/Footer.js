import React from 'react';

export default () => {
  return (
    <div className='footer'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='order-2 col-12'>
            <div className='allrights'>
              <h5>&copy;2018 Bina Kim All Rights Reserved</h5>
            </div>
          </div>
          <div className='order-1 col-12'>
            <ul class="nav justify-content-center">
              <li class="col-2">
                <a class="nav-link" href="#"><h4>LinkedIn</h4></a>
              </li>
              <li class="col-2">
                <a class="nav-link" href="#"><h4>Medium</h4></a>
              </li>
              <li class="col-2">
                <a class="nav-link" href="#"><h4>Email</h4></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
