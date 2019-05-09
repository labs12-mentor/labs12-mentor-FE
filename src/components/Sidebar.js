import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  CardText,
  CardFooter,
  CardLink
} from 'reactstrap';
import styled from 'styled-components';

const SidebarCont = styled.div`
    width: 100%
    margin-right: 10px;
    height: 100%;
`;

const Sidebar = props => {
  return (
    <div>
      <SidebarCont>
        <Card height="100%">
          <CardHeader></CardHeader>
          <CardBody>
            <CardTitle>Mentor Match</CardTitle>
            <CardLink href="#">link to mentor profile</CardLink>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </SidebarCont>
    </div>
  )
}

export default Sidebar;