import React,{useState} from 'react'
import './NavbarComp.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavbarComp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className='container-fluid col-xl-11 col-lg-11 mt-5'>
                <a class="navbar-brand" href="#" style={{color:"#0F2B4A;"}}></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse d-flex justify-content-end mt-1 headerNav" id="navbarTogglerDemo02">
                
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li class="nav-item">
                            <button className='navbtnClass'><i class="fa-solid fa-magnifying-glass niClass"></i></button>
                            {/* <div class="search"> 
                            <input type="text" class="input" placeholder="Search..."/>
                            {/* <button class="btn"><i class="fas fa-search"></i></button> */}
                            {/* <button className='sbtnClass'><i class="fa-solid fa-magnifying-glass niClass"></i></button> */}
                        {/* </div> */}
                                                
                        </li>
                        <li class="nav-item">
                            {/* <span><i class="fa-solid fa-bars niClass"></i></span> */}
                            <button className='navbtnClass' onClick={handleShow} ><i class="fa-solid fa-bars niClass"></i></button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

        <Offcanvas show={show} onHide={handleClose} className='offcanvasClass' placement='end' style={{'width':'300px'}}>
        <Offcanvas.Header closeButton>
          
        </Offcanvas.Header>
        <Offcanvas.Body class='buttonClass'>
        <Link to="/">
            <Button variant='light'>
                Chiken Masala
            </Button>
        </Link>
        <Link to="/page1">
            <Button variant='light'>
                Classic Chiken
            </Button>
        </Link>
        <Link to="/page2">
            <Button variant='light'>
                Italian Fish
            </Button>
        </Link>
        <Link to="/page3">
            <Button variant='light'>
                Royal Crab
            </Button>
        </Link>
        
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default NavbarComp


