import React from 'react'

function Illustration({pokemonName, imgUrl, pokemonType}) {
    return (
        <section className="flex column illustration">
        <div className={`${pokemonType}`}>
          <img src={imgUrl} alt="" />
        </div>
        <h1>{pokemonName} <span className={pokemonType} style={{borderRadius: '1rem', padding:'0 1rem', color: 'white'}}>{pokemonType}</span></h1>
      </section>
    )
}

export default Illustration
