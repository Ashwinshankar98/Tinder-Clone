import React, { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from "./axios.js"

function TinderCards() {
    
    const [people,setPeople]=useState([]);

    useEffect(() => {
        async function fetchData(){
            const req=await axios.get("/tinder/cards");

            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped=(direction,nameSwiped)=>{
        console.log('removing'+nameSwiped)

    };

    const leftScreen=(nameLeft)=>{
        console.log(nameLeft+'left the screen')
    };

    return (
        <div className='tinderCards'>
            <div className='tinderCards_container'>
                {people.map((person)=>
                (
                    <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=>leftScreen(person.name)}
                    >
                        <div
                        className='bimage'
                        style={{backgroundImage:"url("+person.url+")"}}
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
