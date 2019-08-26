import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class Reactsidenav extends Component {
    render() {
        return (
            <div>
                <SideNav>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="about">
                            <NavIcon>
                                <i className="fa fa-fw fa-question" style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                About
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="about">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Line chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="about">
                            <NavIcon>
                                <i className="fa fa-fw fa-bar-chart" style={{ fontSize: '1.75em' }}></i>
                            </NavIcon>
                            <NavText>
                                Bar chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="Services">
                            <NavIcon>
                                <i className="fa fa-fw fa-bookmark" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                            Services
            </NavText>
                        </NavItem>
                        <NavItem eventKey="Logout">
                            <NavIcon>
                            <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} />
                                
                            </NavIcon>
                            <NavText>
                           
            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
        )
    }
}
