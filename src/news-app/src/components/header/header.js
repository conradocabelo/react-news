import './header.css';
import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
} from 'mdb-react-ui-kit';

function AppHeader(props) {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>                        
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => props.changeCategory("business")} href='#'>Negocios</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => props.changeCategory("entertainment")} href='#'>Entretenimento</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => props.changeCategory("general")} href='#'>Geral</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => props.changeCategory("health")} href='#'>Saude</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => props.changeCategory("science")} href='#'>Ciencia</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => props.changeCategory("sports")} href='#'>Esportes</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => props.changeCategory("technology")} href='#'>Tecnologia</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>                    
                </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>                

            </MDBContainer>
        </MDBNavbar>
    );
}

export default AppHeader;
