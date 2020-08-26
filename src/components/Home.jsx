import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { Button, Image } from 'react-bootstrap'
 
class Home extends Component {

    render() {
        return(
            <div className='homepage'>
                <div className='introduction'>
                    <h1 className='title'>Disney Harley</h1>
                    {/* <Image src="2train.jpg" fluid /> */}
                    <p className='brandStatement'>: a motivated software engineer who is eager to expand my knowledge and connections to make a technical impact in the world. As a veteran of the Military I gained skills to maintain focus and attention to detail and problem solving skills. I have a passion for adventure and experiencing different cultures and ways of life. I plan to use these skills and dedication to help making dynamic and and user friendly web applications and exploring the world of design and development. Lets do it together !</p>
                    <div className='homeButtons'>
                        <Button variant='outline-light'>View Resume</Button>
                        <Button variant='outline-dark'>Go to Portfolio</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home