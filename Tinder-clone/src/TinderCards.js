import React,{ useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core';
import database from './firebase';
const TinderCards = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    const swiped = (direction, nameToDelete) => {
        console.log('Removing' + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + 'left the screen')
    }
    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {
                    people.map((person) => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={['up', 'down']}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div 
                                className="card"
                                style={{backgroundImage: `url(${person.url})`}}
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards
