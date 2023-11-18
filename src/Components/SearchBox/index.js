import './SearchBox.css'

export default () => {
    return  <form style={{
        display: 'flex',
        minWidth: '570px'
    }}>
        <input type="text" placeholder=" Search an album of your choice" className="input"></input>
        <button className='button1'>
            <img src="Searchicon.jpg" className='img'></img>
        </button>
    </form>
}