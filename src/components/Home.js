import React from 'react'
import Featured from './Featured'
import List from './List'
import Navbar from './Navbar'
import './Home.css'

export default function Home({ type }) {
    return (
        <div className="home">
            <Navbar></Navbar>
            <Featured type={type}></Featured>
            <List type="popular" section="POPULAR"></List>
            <List type="upcoming" section="UPCOMING"></List>
            <List type="top_rated" section="TOP RATED"></List>
            <List type="popular" section="POPULAR"></List>
            <List type="upcoming" section="UPCOMING"></List>
            <List type="top_rated" section="TOP RATED"></List>
        </div>

    )
}
