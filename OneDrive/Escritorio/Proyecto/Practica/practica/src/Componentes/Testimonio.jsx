import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio'
      src={require(`../imagenes/${props.imagen}.png`)}
      alt='foto de traductoras' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} <strong>{props.empresa}</strong> </p>
        <p className='texto-testimonio'> {props.testimonio}</p>
        <p className='experiencia-testimonio'><strong>Experiencia </strong>{props.experiencia} </p>
        <p className='idiomas'><strong>Idiomas </strong>{props.idiomas} </p>
      </div>
      <img className='social-logo'
      src={require('../Social-logotipos/instagram.png')}
      alt='logo-instagram'
      />
      <img className='social-logo'
      src={require('../Social-logotipos/twitter.png')}
      alt='logo-instagram'
      />
      <img className='social-logo'
      src={require('../Social-logotipos/whatsapp.png')}
      alt='logo-instagram'
      />
    </div>
  
  );
}

export default Testimonio;

