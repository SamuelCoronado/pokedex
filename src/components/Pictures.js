import React from 'react'
import PicturesItem from "./PicturesItem";
import Iterator from "../utils/Iterator"

function Pictures({pictures}) {

  const iter = new Iterator(pictures);
  const picsArray = []

  while(iter.hasNext()){
    picsArray.push(iter.collection[iter.index]);
    iter.next()
  }

    return (
        <section className="flex column pictures">
              <h1>Pictures</h1>
              <div className="flex">
               {
                picsArray.map((pic, index) => {
                 return <PicturesItem imgUrl={pic} key={index} />
                })
               }
              </div>
        </section>
    )
}

export default Pictures
