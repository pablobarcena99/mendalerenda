import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModernCard from "../components/ModernCard";
import Hero from "../components/Hero";

export default function Main() {
  return (
    <>
      {/* <Hero name="MENDA LERENDA"/> */}
      <ModernCard
        color='purple'
        name='NOSOTROS'
        text='Menda Lerenda nace en 2020, como resultado de las reuniones que sus integrantes vienen haciendo en el estudio de grabación desde hace años.
              Se nutre de influencias muy diversas, que van desde el Rap al Flamenco, pasando por una gran dosis de rock n roll, con la energía del punk más callejero.
              Este cóctel da lugar a canciones de diversos géneros musicales , que los menda lerenda van construyendo, y en muchas ocasiones trabajando a distancia, haciendo uso de las nuevas tecnologías.'
        extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666862508/menda%20lerenda/menda1.jpg'
      />
      <ModernCard
        color='black'
        name='ESTADO MENTAL REVERSIBLE'
        text='Solamente hemos sido nosotros mismos en un pequeño estudio haciendo las canciones que nos salían de dentro.Es un disco lleno de contrastes, de géneros, de errores, de darle mil vueltas a un tema, de canciones con 4 acordes, de alcohol, de fiesta, de sintetizadores que nos han hecho saltar del sofá, de amor , de enfados, de alguna idea que ha terminado siendo un solo de guitarra de 1 min, de amigos, de nostalgia, de felicidad, de humo en el ambiente, de llegar tarde, de madrugones, de cafe, de autotune (más de lo que admitimos🙈), de ruido, de dulzura, de picos por encima de los +0 Db y de nosotros.'
        extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666778413/menda%20lerenda/Estado_mental_reversible_ct7gni.jpg'
      />
      <ModernCard
        name='SPOTIFY'
        color='green'
        iframeLeft={
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
      <ModernCard
        color='purple'
        name='YOUTUBE'
        iframeLeft={
          <iframe
            width='100%'
            height='350'
            src='https://www.youtube.com/embed/_7HzlEf8IqM'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        }
      />
      <ModernCard
        color='black'
        name='Apple Music'
        iframeLeft={
          <iframe
            title='Apple Music'
            allow='autoplay *; encrypted-media *; fullscreen *; clipboard-write'
            frameBorder='0'
            height='450'
            width='100%'
            sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation'
            src='https://embed.music.apple.com/us/album/estado-mental-reversible/1619781564'></iframe>
        }
      />
    </>
  );
}
