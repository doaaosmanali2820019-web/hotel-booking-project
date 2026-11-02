import React, {useState} from 'react';
import { Navbar,Nav,Container,Card,Button,Form,Row,Col ,Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export default function App(){
    const [page,setPage]=useState(1);
    const[selectedHotel,setSelectedHotel]=useState(null);
    const[shrinkingHotelId,setShrinkingHotleId]=useState(null);
    const hotels =[
        {
        id : 1,
        name:'Nile Grand Hotle',
        stars:'*****',
        location:'Khartoum-Nile Street',
        img:'/H.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
      {
        id : 2,
        name:'Al-Salam Resort',
        stars:'*****',
        location:'Khartoum-Al Riyed',
        img:'/B.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
      {
        id : 3,
        name:'Red Sea Palace',
        stars:'*****',
        location:'Port Sudan-Corniche',
        img:'/C.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
      {
        id : 4,
        name:'Royal Crown Hotel',
        stars:'*****',
        location:'Khartoum-Nile Street',
        img:'/D.jpeg',
        desc:'Stunning river views with full premium hoteel services ,pool,and fine dining.'
    },
    ];
    const handleHotelClick = (hotel)=>{
        setSelectedHotel(hotel);
        setPage(3);
    // setTimeout(()=>{
    //     selectedHotel(hotel);
    //     setPage(3);
    //     setShrinkingHotleId(null);
    // },200)

};
return(
    <div dir="ltr" className="bg-light min-vh-100">
        <Navbar bg="dark" variant="dark"className="px-4 py-3 shadow-sm">
          <Container fluid className="d-flex align-items-center justify-content-start" >
        <Navbar.Brand onClick={()=>setPage(1)}className="fw-bold fs-4 text-white me-4"style={{cursor:'pointer',letterSpacing:'0,5px'}}>Hotel Booking</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="d-flex align-items-center ms-3"style={{gap:'160px'}}>
                <Nav.Link onClick={()=>setPage(1)} className="text-whit  text-decoratinon-none p-0"  style={{cursor:'pointer',fontSize:'15px'}}>Home</Nav.Link>
            
                <Nav.Link onClick={()=>setPage(2)}className="text-whit  text-decortion-none p-0"style={{cursor:'pointer',fontSize:'15px'}}>Hotles</Nav.Link>
                <Nav.Link  onClick={()=>setPage(5)}className="text-whit text-decoration-none p-0" style={{cursor:'pointer',fontSize:'15px'}}>Contact Us</Nav.Link>
                {/* </Nav> */}
                </Nav>
                </Container>
                </Navbar>
              <Container className="p-flex justify-content-center pb-5" >
                {page ===1 &&(
                  <Row className="w-100 align-items-center justify-content-center g-4  my-2">
                    <Col lg={5}md={6}>
                    <Card className="p-4 shadow-sm border-0" style={{width:'100%',
                      minHeight:'480px',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'center'
                    }}>
                        <h4 className="tex-center mb-4 fw-bold" style={{color:'#ddb531'}}>Login/Register</h4>
                        <Form onSubmit={(e)=>{e.preventDefault();setPage(2);}}>
                            <Form.Group className="mb-4">
                                <Form.Label className="fw-semiboid">Full Name</Form.Label>
                                <Form.Control type="text" required placeholder="Enter your full name"
                                style={{padding:'12px'}}
                                />
                                </Form.Group>

                       <Form.Group className="mb-5">
                                <Form.Label className="fw-semibold">Email Address</Form.Label>
                                <Form.Control type="email" required placeholder="name@example.com"
                                style={{padding:'12px'}}
                                />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 py-2 border-0 fw-bold"
                                style={{backgroundColor:'#ddb531',color:'#fff'}}
                                >Next</Button>
                               </Form>
                               </Card>
                               </Col>
                               <Col lg={7} md={6}>
                               <Card className="p-4 shadow-sm border-0 text-center"style={{minHeight:'480px'}}>
                                <div className="mb-3 p-3 rounded" style={{backgroundColor:'#fdfbf7',border:'1px solid#f1e4c3'}}>
                                  <h4 className="fw-bold mb-2"style={{color:'#d4af37'}}>Welcome to Hotel Booking</h4>
                                  <p className="text-muted mb-0 " style={{fontSize:'15px'}}>We Wish you a Wonderful stay and excellent service! Explore our luxury hotels below. </p>
                                </div>
                                <div className="rounded overflow-hidden  shadow-sm">
                                  <Carousel interval={2500} controls={false}indicators={true}fade>
                                    {hotels.map((hotel)=>(
                                      <Carousel.Item key={hotel.id}>
                                        <img
                                        src={hotel.img}
                                        className="d-block w-100"
                                        alt={hotel.name}
                                        style={{height:'280px',objectfit:'cover',borderRadius:'9px'}}/>
                                        <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-1 mb-2">
                                          <h6 className="m-0 text-white fw-bold">{hotel.name}</h6>
                                        </Carousel.Caption>
                                      </Carousel.Item>
                                    )
                                    )}
                                  </Carousel>
                                  </div>
                                  </Card>
                                  </Col>
                                  </Row>
                                 )}
                               {page === 2 &&(
                                <Row className="g-4 w-100 justify-content-center">
                                    {hotels.map((h)=>(
                                        <Col key={h.id} md={6}>
                                            <Card className="shadow-sm h-100 border-0 rounded-3 overflow-hidden">
                                                <Card.Img
                                                variant="top"
                                                src={h.img}
                                                style={{height:'190px',objectFit:'cover',cursor:'pointer'}}
                                                onClick={()=>{handleHotelClick(h);
                                                  setPage(3);
                                                }}
                                                />
                                                <Card.Body className="d-flex flex-colum justify-content-between p-3 text-center">
                                                    <div>
                                                        <Card.Title className="fw-bold fs-5 mb-1">{h.name}</Card.Title>
                                                        <Card.Text className="text-warning mb-1">{h.stars}</Card.Text>
                                                        <Card.Text className="text-muted small mb-2">{h.location}</Card.Text>
                                                        <Card.Text className="small text-secondary">{h.desc}</Card.Text>
                                                    </div>
                                                    <Button className="fw-bold border-0px-4 py-4 shadow-sm"
                                                    style={{backgroundColor:'#d4af37',color:'#fff',fontSize:'11px',borderRadius:'6px',width:'120px', height:'30px',display:'flex',alignItems:'center',justifyContent:'center',padding:'0'}}
                                                    onClick={()=> {handleHotelClick(h);
                                                      setPage(3);
                                                    }}
                                                    >Book Now</Button>
                                                  </Card.Body></Card></Col>))}
                                                  </Row> )}  
                                                  {page === 3 && selectedHotel &&(
                                                    <Card className="p-4 shadow-sm w-100" style ={{maxWidth:'900px'}}>
                                                        <Row className="align-items-center">
                                                            <Col md={6}><h4 className="mb-4 text-success">Booking Information</h4>
                                                            <Form onSubmit={(e)=>{e.preventDefault();setPage(4);}}>
                                                                <Form.Group className="mb-3">
                                                                  <Form.Label>Check-in Data</Form.Label>
                                                                  <Form.Control type="date" required/></Form.Group>
                                                                  <Form.Group className="mb-3">
                                                                    <Form.Label>Check-out Date</Form.Label>
                                                                    <Form.Control type="date" required/></Form.Group>
                                                                    <Form.Group className="mb-4">
                                                                        <Form.Label>Number of Guests</Form.Label>
                                                                        <Form.Control type="number"min="1" defaultValue="1" required/>
                                                                    </Form.Group>
                                                                    <Button variant="success" type="submit"className="w-100 py-2">Submit Booking</Button>
                                                                    </Form></Col>
                                                                    <Col md={6}className="text-center mt-4 mt-md-0 border-start-md pt-3 pt-md-0">
                                                                    <img
                                                                    src={selectedHotel.img}
                                                                    alt={selectedHotel.name}
                                                                    className="img-fluid rounded mb-3 shadow-sm"/>
                                                                    <h5 className="fw-bold">{selectedHotel.name}</h5>
                                                                    <p className="text-warning mb-1">{selectedHotel.stars}</p>
                                                                    <p className="text-muted small mb-2">{selectedHotel.location}</p>
                                                                    <p className="text-secondary">{selectedHotel.desc}</p>
                                                                    </Col></Row></Card>)}
                                                                    {page === 4 &&(
                                                                      <div
                                                                        className="d-flex align-items-center justify-coontent-center w-100"
                                                                        style={{minHeight:'80vh'}}>
                                                                        <Card className="p-4 shadow-sm border-0 rounded-3 text-center mx-auto" style={{maxWidth:'450px',width:'100%'}}>
                                                                            <h1 className="fw-bold mb-2" style={{color:'#2b713b'}}>Done</h1>
                                                                            <h3 className="text-successs fw-bold">Congratulations!</h3>
                                                                            <p className="text-muted mt-2">Your reservation has been compleated successfully.</p>
                                                                            <Button variant= "primary" className="mt-3 py-2" onClick={()=>setPage(2)}>Back to Hotels</Button>

                                                                        </Card></div>
                                                                    )}    
                                                                    {page === 5 &&(
                                                                      <div className="w-100 my-auto py-4">
                                                                      
                                                                      
                                                                        <Card className="p-4 shadow-sm border-0 rounded-3 text-center mx-auto"
                                                                        style={{maxWidth:'480px',widows:'100%'}}>
                                                                          <h3 className="fw-bold mb-3"style={{color:'#d4af37'}}>Contact  Us</h3>
                                                                          <p className=" text-muted mb-4 small">Have questionor need assistance with your booking? We are here th help! </p>
                                                                          <Form onSubmit={(e)=>{e.preventDefault();alert('Message sent Sucessfully!');}}>
                                                                            <Form.Group className="mb-3 text-start">
                                                                              <Form.Label className="fw-semibold">Your Name</Form.Label>
                                                                              <Form.Control type="text" placeholder="Enter Your Name" required/>
                                                                            </Form.Group>
                                                                            <Form.Group className="mb-3 text-start">
                                                                              <Form.Label className="fw-semibold">Email Address</Form.Label>
                                                                              <Form.Control type="email" placeholder="name@example.com" required style={{padding:'10px'}}/>
                                                                            </Form.Group>
                                                                            <Form.Group className="mb-4 text-start">
                                                                              <Form.Label className="fw-semibold">Message</Form.Label>
                                                                              <Form.Control as="textarea" rows={6} placeholder="Howe can we help you ?" required style={{padding:'10x'}}/>
                                                                            </Form.Group>
                                                                            <Button
                                                                            type="submit"
                                                                            className="w-100 py-2 border-0 fw-bold shadow-sm"
                                                                            style={{backgroundColor:'#d4af37',color:'#ffffff',fontSize:'16px',borderRadius:'8px'}}
                                                                            >Send Message</Button>
                                                                          </Form>
                                                                        </Card>
                                                                        
                                                                      
                                                                      </div>
                                                                    )}                         
                                  </Container>
                   </div>
);
}
                                  
