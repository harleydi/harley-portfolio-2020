import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { Button, Image } from 'react-bootstrap'
import Footer from './Footer'
 
class Home extends Component {

    render() {
        return(
            <div className='homepage'>
                <div className='introduction'>
                    <h1 className='title'>(noun)</h1>
                    {/* <Image src="2train.jpg" fluid /> */}
                    <p className='brandStatement'><strong>:</strong> a motivated software engineer who is eager to expand my knowledge and connections to make a technical impact in the world. As a veteran of the Military I gained skills to maintain focus and attention to detail and problem solving skills. I have a passion for adventure and experiencing different cultures and ways of life. I plan to use these skills and dedication to help making dynamic and and user friendly web applications and exploring the world of design and development. Lets do it together !</p>
                    <div className='homeButtons'>
                        <Button href='https://www.docdroid.net/qgq3lY5/disneyharley2020-pdf' variant='outline-dark'>View Resume</Button>
                        <Button href='/portfolio' variant='outline-dark'>Go to Portfolio</Button>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home