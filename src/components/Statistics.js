import React from 'react'
import StatisticsItem from "./StatisticsItem";

function Statistics({statistics}) {

  const {
    attack,
    defense,
    health,
    height,
    weight,
    speed
  } = statistics

    return (
        <section className="flex column statistics">
        <h1>Main Statistics</h1>
        <div className="flex column statistics-items">
          <div className="flex stats-columns">
            <StatisticsItem name={'attack'} data = {attack} measurement={'points'}/>
            <StatisticsItem name={'defense'} data = {defense} measurement={'points'} /> 
            <StatisticsItem name={'health'}  data = {health} measurement={'points'}/>
          </div>
          <div className="flex stats-columns">
            <StatisticsItem name={'height'} data = {height} measurement={'ft'}/>
            <StatisticsItem name={'weight'} data = {weight} measurement={'lb'}/>
            <StatisticsItem name={'speed'} data = {speed} measurement={'mp/h'}/>
          </div>
        </div>
      </section>
    )
}

export default Statistics
