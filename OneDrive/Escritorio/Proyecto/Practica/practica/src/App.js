import './App.css';
import Testimonio from './Componentes/Testimonio';


function App() {
  return (
    <div className="App"> 
    <h1>Traductoras en México</h1>
    <p className='how-are'> ¿Quienes son y donde encontrarlas?</p>     
      <div className='contenedor-principal'>
      
      
      <Testimonio 
      nombre='Iris Dominguez'
      pais='Mexico'
      imagen='irisdom'
      cargo='Traductora'
      empresa='Freelancer'
      testimonio='Traductora/ Correctora de estilo/ Subtituladora'
      experiencia='10 años'
      idiomas='Italiano, Aleman, Ingles, Español'
      />
      <Testimonio
      nombre='Hilda Alegre'
      pais='Mexico'
      imagen='hilda'
      cargo='Traductora'
      empresa='Freelancer'
      testimonio='Dubbing translator en Digital tv group'
      experiencia='20 años'
      idiomas='Ingles, Español'
      />
      <Testimonio
       nombre='Giselle Castro'
       pais='Francia'
       imagen='gissel'
       cargo='Traductora'
       empresa='Freelancer'
       testimonio='Traductora audiovisual Franco-Mexicana con 12 años de experiencia 
       traduciendo y adaptando series de TV, largometrajes y documentales.'
       experiencia='12 años'
       idiomas='Frances, Ingles, Español'
      />
      
      </div>

      
    </div>
  );
}

export default App;
