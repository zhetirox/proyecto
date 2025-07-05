import './Mapa.css'
function Mapa() {
    return (
        <div className='map'>
        <iframe className='mapa' src="https://maps.google.com/maps?hl=en&amp;q=sena%20%20soacha+(SENA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
        <nav className="bottom-nav">
          <button className="nav-btn">
            <i className="fas fa-search"></i>
          </button>
          <button className="nav-btn">
            <i className="fas fa-location-arrow"></i>
          </button>
          <button className="nav-btn">
            <i className="fas fa-users"></i>
          </button>
        </nav>
      </div>
    );

}

export default Mapa;