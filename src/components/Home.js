import React from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
    return (
        <div>
            <Container className="p-5 my-5 bg-light rounded">
                <h1>Learn Code With Abhishek</h1>
                <p>My name is Anthony Consalves. Chalo Aaj Kuch Toofani karte hai</p>
                <Button color="primary">Start Using</Button>
            </Container>
        </div>
    )
}

export default Home;