import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ModernCard from "@/components/ModernCard";
import Hero from "@/components/Hero";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      {/* <Hero name="MENDA LERENDA"/> */}
      <div style={{height: '48px'}}></div>
      <Element id="inicio">
        <ModernCard
          color='purple'
          name='NOSOTROS'
          text='Menda Lerenda nace en 2020, como resultado de las reuniones que sus integrantes vienen haciendo en el estudio de grabación desde hace años.
                Se nutre de influencias muy diversas, que van desde el Rap al Flamenco, pasando por una gran dosis de rock n roll, con la energía del punk más callejero.
                Este cóctel da lugar a canciones de diversos géneros musicales , que los menda lerenda van construyendo, y en muchas ocasiones trabajando a distancia, haciendo uso de las nuevas tecnologías.'
          extImg='https://res.cloudinary.com/dygvieuns/image/upload/v1666862508/menda%20lerenda/menda1.jpg'
        />
      </Element>
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
            allowFullScreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'></iframe>
        }
      />

      <Element id='eventos'>
        <Hero name='EVENTOS'>
        </Hero>
      </Element >
      <ModernCard name='Ebrovisión' text='/09/2023' color='purple' extImg='' />
      <Element id='galeria'><Hero name='GALERÍA' /></Element>
      <ModernCard
        gallery
        extImg={[
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862451/menda%20lerenda/AL9nZEVNdTfjWGCBfonJ0C54wDuAFZbrequgIoAliu9iKxdqm0krdvsQWF3B8OYzN0hlzKDXlIuU0iCLLHXvmDtEz6TxEcDVRvkPWE2JrNlzEScI3rdpcSBKYaGjxJ-cVidlILyDAAR78vuEXqI4zkt_6rriMw_w1259-h944-no_tvtlqc.jpg",
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg",
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg",
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg",
        ]}
        color='black'
      />
      <ModernCard
        gallery
        extImg={[
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862451/menda%20lerenda/AL9nZEVNdTfjWGCBfonJ0C54wDuAFZbrequgIoAliu9iKxdqm0krdvsQWF3B8OYzN0hlzKDXlIuU0iCLLHXvmDtEz6TxEcDVRvkPWE2JrNlzEScI3rdpcSBKYaGjxJ-cVidlILyDAAR78vuEXqI4zkt_6rriMw_w1259-h944-no_tvtlqc.jpg",
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg",
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg",
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg",
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg",
        ]}
        color='purple'
      />
      <ModernCard
        gallery
        extImg={[
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862451/menda%20lerenda/AL9nZEVNdTfjWGCBfonJ0C54wDuAFZbrequgIoAliu9iKxdqm0krdvsQWF3B8OYzN0hlzKDXlIuU0iCLLHXvmDtEz6TxEcDVRvkPWE2JrNlzEScI3rdpcSBKYaGjxJ-cVidlILyDAAR78vuEXqI4zkt_6rriMw_w1259-h944-no_tvtlqc.jpg",
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862468/menda%20lerenda/AL9nZEW-0tLOUQ98cXoGjDls90wG8AUrTwnTlc7WfPKk-GgXMGI24coM7lQHsTZbHIpOjX1f7FGPEvmREvgUeYuS59QveLMO-jQ_Ir8ZjteCBGCnwlSF-P_FS70CcxSeQoK2VBSiO8aD0EWiTncjOX9yCxFg4Q_w1416-h944-no_zgzfrs.jpg",
          "https://res.cloudinary.com/dygvieuns/image/upload/v1666862488/menda%20lerenda/menda2.jpg",
        ]}
        color='black'
      />
    </>
  );
}
