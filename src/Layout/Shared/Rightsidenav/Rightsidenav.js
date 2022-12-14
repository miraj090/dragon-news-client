import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub ,FaFacebook , FaTwitch , FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../Carousel/BrandCarousel";

const Rightsidenav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h5 className="mt-5">Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-3"><FaFacebook/> Facebook </ListGroup.Item>
          <ListGroup.Item className="mb-3"><FaTwitter/> Twitter </ListGroup.Item>
          <ListGroup.Item className="mb-3"><FaTwitch/> Twitch </ListGroup.Item>
          <ListGroup.Item className="mb-3"><FaWhatsapp/> Whatsapp</ListGroup.Item>
          <ListGroup.Item className="mb-3"> Terms & </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel/>
      </div>
    </div>
  );
};

export default Rightsidenav;
