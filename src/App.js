import './layout.min.css';
import './sm-style.css';
import './bootstrap.min.css'
import { useState } from 'react'
import Resultado from './Resultado';

function App() {
  const [token, setToken] = useState('');
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <input id="hdnHosp" type="hidden" />
      <header className="header navbar-fixed-top">
        <nav className="navbar" role="navigation">
          <div className="container">
            <div className="menu-container">

              <div className="row">
                <div className="col-4 logo" style={{ width: '200px' }}>
                  <a className="logo-wrap" href="index.php">

                    <img className="logo-img" style={{ width: "100%" }} src="img/logo.png" />
                  </a>
                </div>
                <div className="col-8 nm-sistema-1">
                  <span className="nm-sistema-2">
                    RESULTADOS DE LABORATORIO
                  </span>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </header>
      {!showForm &&
        < div className="container-sm" data-auto-height="true">
          <div className="content-lg container text-center">
            <div className="row">
              <div className="col-12">
                <div className="contenedorTerminos">

                  <p className="tituloMedio">TERMINOS Y CONDICIONES</p>
                  <p className="regularTexto">
                    Estimado usuario,
                    <br></br>
                    Agradecemos de antemano su preferencia. Para poder consultar tus resultados le recomendamos tener a la mano su Orden de Estudios para que pueda accesar pronto a sus resultados. Asimismo, le informamos que solamente se pueden consultar los resultado relacionados a la Orden de Estudios con la que ingrese.
                    Si no cuenta con estos datos, le pedimos por favor acudir al a sucursal donde le realizaron sus estudios para recogerlos físicamente.
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="contenedorTerminos">
                  <p className="tituloMedio">AVISO DE PRIVACIDAD</p>
                  <p className="regularTexto">
                    <a href="https://www.starmedica.com/home/es/aviso-privacidad" target="_blank" style={{ fontFamily: "HelveticaNeue" }}>Clic aqui para mas detalles</a>
                  </p>
                </div>
              </div>
              <div className="col-12 div-instrucciones">
                <div className="contenedorTerminos">
                  <p className="tituloMedio">INSTRUCCIONES</p>
                  <p className="regularTexto">
                    <a id="lnkManual" href="files/Instrucciones_uso_Mylab.pdf" target="_blank" style={{ fontFamily: "HelveticaNeue" }}>Clic aqui para ver instructivo</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div style={{ padding: "0 0 0 20px" }}>
                <input id="chkTermCond" type="checkbox" style={{ float: 'left' }} />
                <label htmlFor="chkTermCond" style={{ float: 'left' }}>&nbsp;&nbsp;Acepto los términos de uso y condiciones de esta web</label>
              </div>
            </div>
            <div className="row">
              <div style={{ padding: "0 0 0 20px" }}>
                <input id="chkAvsPriv" type="checkbox" style={{ float: 'left' }} />
                <label htmlFor="chkAvsPriv" style={{ float: 'left' }}>&nbsp;&nbsp;Conozco y acepto del Aviso de privacidad</label>
              </div>
            </div>
            <div className="row">
              <div style={{ padding: "0 0 0 20px" }}>
                <label htmlFor="asdasd" style={{ float: 'left' }}>&nbsp;&nbsp;Ingrese el token del resultado: </label>
                <input id="asdasd" type="text" style={{ float: 'left' }} onChange={(e) => {
                  setToken(e.target.value);
                }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="button" className="btn btn-primary" id="btn-acepta" onClick={() => {
                  if (token === 'MA04322615' || token === 'MA09125719')
                    setShowForm(true)
                }}>Continuar</button>
              </div>
            </div>
          </div>
        </div>
      }
      {
        showForm &&
        <Resultado id={token} />
      }
      <footer className="footer">
        <div className="grey-space">
          <img src="img/espacio-humano.png" className="slogan-space-manager" alt="" />
        </div>
      </footer>

    </div>
  );
}

export default App;
