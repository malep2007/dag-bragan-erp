import React, { Component } from 'react';

import classes from './Header.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <div>
                <Navbar light expand="md" className={classes.Header}>
                    <NavbarBrand>DAG & BRAGAN</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className={classes.NavItem}>
                                <NavLink >Customers</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Inquries
                               </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Create Inquiry
                                   </DropdownItem>
                                    <DropdownItem>
                                        View Inquiries
                                   </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        )
    }
}

export default Header