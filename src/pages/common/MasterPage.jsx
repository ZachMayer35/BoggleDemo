import React, { PropTypes } from 'react';
import Nav from './MainNav';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min';

class MasterPage extends React.Component {
  render () {
    const { location, children } = this.props;
    return (
      <div className=''>
        <div className="container-fluid App-header text-center">
          <h1>-Boggle Demo-</h1>          
        </div>
        <Nav currentPath={location.pathname} />
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MasterPage.propTypes = {
  location: PropTypes.any
};

export default MasterPage;
