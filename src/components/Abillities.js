import React from 'react'
import Iterator from "../utils/Iterator"

function Abillities({abilities}) {

const abilitiesArray = [];
const iter = new Iterator(abilities);

while(iter.hasNext()){
    abilitiesArray.push(iter.collection[iter.index].ability.name);
    iter.next()
  }

    return (
        <section className="flex column abillities">
            <h1>Main skills</h1>
            <div>
               {
                   abilitiesArray.map((ability, index) => {
                       return <p index={index}>{ability}</p>
                   })
               }
            </div>
        </section>
    )
}

export default Abillities
