import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledCarousel from "../components/Carousel";
import Card from "../components/Card";
import Hero from "../components/Hero";

export default function Main() {
  return (
    <>
      <div>
        {/* <Hero img="logo menda white.png"/> */}
        <Hero name="MENDA LERENDA"/>
        <div className="container">
          <div className='row'>
            <Card
              name='Nosotros'
              text='Menda Lerenda nace en 2020, como resultado de las reuniones que sus integrantes vienen haciendo en el estudio de grabación desde hace años.
              Se nutre de influencias muy diversas, que van desde el Rap al Flamenco, pasando por una gran dosis de rock n roll, con la energía del punk más callejero.
              Este cóctel da lugar a canciones de diversos géneros musicales , que los menda lerenda van construyendo, y en muchas ocasiones trabajando a distancia, haciendo uso de las nuevas tecnologías.'
            />
            <Card img='banner.png' />
          </div>
          <div className='row'>
            <Card
              name='Estado Mental Reversible'
              text='Solamente hemos sido nosotros mismos en un pequeño estudio haciendo las canciones que nos salían de dentro.Es un disco lleno de contrastes, de géneros, de errores, de darle mil vueltas a un tema, de canciones con 4 acordes, de alcohol, de fiesta, de sintetizadores que nos han hecho saltar del sofá, de amor , de enfados, de alguna idea que ha terminado siendo un solo de guitarra de 1 min, de amigos, de nostalgia, de felicidad, de humo en el ambiente, de llegar tarde, de madrugones, de cafe, de autotune (más de lo que admitimos🙈), de ruido, de dulzura, de picos por encima de los +0 Db y de nosotros.'
            />
            <Card extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666778413/menda%20lerenda/Estado_mental_reversible_ct7gni.jpg' />
          </div>
          <div className='row'>
            <Card />
            <Card
              iframe={
                <iframe
                  title='menda'
                  src='https://open.spotify.com/embed/album/5yW5CLNvqCWLpXvGG0MlG3?utm_source=generator&theme=0'
                  width='100%'
                  height='380'
                  frameBorder='0'
                  allowFullScreen=''
                  allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                  loading='lazy'></iframe>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
