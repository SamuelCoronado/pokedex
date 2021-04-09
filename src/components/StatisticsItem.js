import React from 'react'

function StatisticsItem({name, data, measurement}) {

    
    return (
        <div className="flex column statistics-item">
            <p>{name}</p>
            <p>{data}</p>
            <p>{measurement}</p>
            <img src={`/assets/img/${name}.png`} alt="asdas" />
      </div>
    )
}

export default StatisticsItem
