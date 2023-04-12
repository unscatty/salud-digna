import './Loading.css';

export default function Loading() {
  return (
    <>
      <div className="main-container">
        <div className="main">
          <div className="creating-container">
            <div className="cargando">
              <span className="texto-cargando">Creando plan</span>
            </div>
          </div>
          <div className="item" style={{ animationDelay: '-1.5s' }}>
            <img src="https://www.kirupa.com/icon/1f951.svg" />
          </div>
          <div className="item" style={{ animationDelay: '-3s' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/590/590685.png" />
          </div>
          <div className="item" style={{ animationDelay: '-4.5s' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/1999/1999991.png" />
          </div>
          <div className="item" style={{ animationDelay: '-6s' }}>
            <img src="https://www.kirupa.com/icon/1f96c.svg" />
          </div>
          <div className="item" style={{ animationDelay: '-7.5s' }}>
            <img src="https://www.kirupa.com/icon/1f347.svg" />
          </div>
          <div className="item" style={{ animationDelay: '-9s' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/5263/5263359.png" />
          </div>
          <div className="item" style={{ animationDelay: '-10.5s' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/3151/3151121.png" />
          </div>
          <div className="item" style={{ animationDelay: '-12s' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/680/680942.png" />
          </div>
          <div className="item" style={{ animationDelay: '-13.5s' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/680/680956.png" />
          </div>
          <div className="item" style={{ animationDelay: '-15s' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/9007/9007110.png" />
          </div>
        </div>
      </div>
    </>
  );
}
