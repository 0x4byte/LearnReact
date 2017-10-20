import React from 'react';
import { Link } from 'react-router';
import { Sidebar, Nav, Icon } from 'react-impression';

// 侧边栏Sidebar
const AppSidebar = () => {
  return (
    <Sidebar>
      <Sidebar.Header />
      <Sidebar.Body>
        <Nav>
          <Nav.Link>
            <Link to="/"><Icon type="television" left />example1</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/example2"><Icon type="television" left />example2</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/example3"><Icon type="television" left />example3</Link>
          </Nav.Link>
        </Nav>
      </Sidebar.Body>
    </Sidebar>
  );
};

export default AppSidebar;
