import React from 'react';
import { Link } from 'react-router-dom';

class AddForm extends React.Component {

  state = {
    editID: 99
  }

  render() {

    return (
      <div className="wrapper">

        <header className="main-header">
          <a href="index.html" className="logo"><b>Admin</b>LTE</a>
          {/* <a href="javascript:void(0)">GO</a> */}
          {/* <a href="#">GO</a> */}
        </header>
        <aside className="main-sidebar">
          <section className="sidebar">

            <ul className="sidebar-menu">

              <li className="treeview">
                <a href="#">
                  <i className="fa fa-edit"></i> <span>Forms</span>
                  <i className="fa fa-angle-left pull-right"></i>
                </a>
                <ul className="treeview-menu">
                  <li><Link to="/registration"><i className="fa fa-circle-o"></i>Add Form</Link></li>
                  <li><Link to="/view"><i className="fa fa-circle-o"></i>View</Link></li>

                  <li><Link to={{ pathname: "/all", id1: 2, id2: 34 }}><i className="fa fa-circle-o"></i>All</Link></li>

                  <li><Link to={{ pathname: "/all/" + this.state.editID }}><i className="fa fa-circle-o"></i>All</Link></li>

                </ul>
              </li>


            </ul>
          </section>
        </aside>



      </div>

    );
  }
}


export default AddForm;
