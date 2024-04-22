import React from 'react'
import BestCharacters from '../components/BestCharacters'
import ListLastEvents from "../components/ListLastEvents";
import Insider from "../components/Insider"

export default function Home() {
  return (
    <div>
      <BestCharacters/>
      <ListLastEvents/>
      <Insider />
    </div>
  )
}
