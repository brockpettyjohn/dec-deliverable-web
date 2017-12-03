import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

class Unit1 extends Component {
    render() {
        return (
            <div>
                <span>Unit 1</span>
                <div className='links'>
                    <Link to='/lesson'>Lesson Plan</Link>
                    <Link to='/zoovideo'>Zoo Video</Link>
                    <Link to='/song'>Song</Link>
                    <Link to='/printout1'>Printout 1</Link>
                    <Link to='/printout2'>Printout 2</Link>
                </div>
            </div>
        )
    }
}

export default Unit1