import './cards.css'

export default(
    key,
    imgSrc,
    follows,
    label
) => {
    return <div className='card-wrapper'>
            <div className='card'>
                <div className='img-frame'>
                    <img src={imgSrc} className='img' />
                </div>
                <div className='card-content'>
                    <span className='card-content-pill'>
                        {follows} follows
                    </span>

                </div>
            </div>
            <p className='card-label'>{label}</p>
           </div>
}