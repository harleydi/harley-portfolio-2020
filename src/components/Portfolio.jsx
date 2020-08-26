import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

class Portfolio extends Component {
    render() {
        return(
            <div className='portfolio'>
                <h1 className='portTitle'>Portfolio</h1>
                <div className='cards'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Music World</Card.Title>
                            <Card.Text>This is a website that allows you to get an artist social media as well as a couple of their songs.</Card.Text>
                            <div className='cardButtons'>
                                <Button className='cardButton' variant="primary" block>Visit Website</Button>
                                <Button className='cardButton' variant="primary" block>GitHub</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Eco-Friendly Expedia Remake</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <div>
                                <Button className='cardButton' variant="primary" block>Visit Website</Button>
                                <Button className='cardButton' variant="primary" block>GitHub</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>MCTS</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <div>
                                <Button className='cardButton' variant="primary" block>Visit Website</Button>
                                <Button className='cardButton' variant="primary" block>GitHub</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Portfolio