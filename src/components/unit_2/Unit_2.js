import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import LessonPlan2 from './LessonPlan2.js'
import Video from './Video.js'
import Song from './Song.js'
import Printout1Two from './Printout1Two.js'
import Printout2Two from './Printout2Two.js'
import '../../App.css'

class Unit2 extends Component {
    render() {
        return (
            <div>
                <span>Unit 2</span>
                <div className='links'>
                    <Link to='/unit2/lesson'>Lesson Plan</Link>
                    <Link to='/unit2/video'>Video</Link>
                    <Link to='/unit2/song'>Song</Link>
                    <Link to='//unit2/printout1'>Printout 1</Link>
                    <Link to='/unit2/printout2'>Printout 2</Link>
                </div>
            </div>
        )
    }
}

export default Unit2