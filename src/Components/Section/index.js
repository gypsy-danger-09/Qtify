import './section.css'
import Cards from '../Cards'
import { useState } from 'react'
import Carousel from '../Carousel'

export default({title,data}) => { 

    const [isCollapsed,setIsCollapsed] = useState(false)

    return <div>
        <div className='section-header'>
        <h1 className='text'>{title}</h1>
        <h1 className='section-toggle-btn'
        onClick={() => {setIsCollapsed(!isCollapsed)}}
        >{isCollapsed ? 'Show All' : 'Collapse'}</h1>
        </div>
        {isCollapsed ? <><Carousel data={data} /></> :<div className='card-container'>
            {data.map((card) => (<Cards
            key={card.id}
            imgSrc={card.image}
            follows={card.follows}
            label={card.title}
            />))}
        </div>}
    </div>
}