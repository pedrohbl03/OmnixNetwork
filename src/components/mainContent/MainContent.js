import React from 'react';
import Form from '../form/Form';
import Topics from '../topics/Topics';
import { MdMovieFilter, MdVideogameAsset, MdDownloadForOffline } from "react-icons/md";



function MainContent() {
  return (
    <main className="bg-primary">
      <div className="image-wrapper">
        <div className="image bg-cover h-64 bg-happy-family">
          <div className="container h-full items-center p-10 flex items-center mx-auto text-primary font-bold text-4xl">
            <h1 className="">OMNIX FIBRA ÓTICA</h1>
          </div>
        </div>
      </div>
      <div className="container lg:flex mx-auto px-2 py-10">
        <div className="text-light w-full pt-0 p-10">
          <div className="text-content">
            <h2 className="font-bold pb-5 text-xl">Agora a Omnix possui sua propria banda larga!</h2>
            <p className="text-justify text-lg">Caso você esteja em duvida se nossos serviços estão disponiveis para você, não perca tempo e preenche o formulario que está ai na sua tela para saber das ofertas que temos na sua região!</p>
            <p className="text-justify text-lg">Não deixe de conferir nossos beneficios para curtir com a familia e aproveitar o melhor da internet todos os dias.</p>
            <div className="attractive-topics flex items-center py-5">
              <MdMovieFilter className="font-lg text-4xl" /> <p className="text-justify px-5 text-xl">Assista filmes e series sem travar.</p>
            </div>
            <div className="attractive-topics flex items-center py-5">
              <MdDownloadForOffline className="font-lg text-4xl" /> <p className="text-justify px-5 text-xl">Baixe videos, fotos e jogos em alta velocidade.</p>
            </div>
            <div className="attractive-topics flex items-center py-5">
              <MdVideogameAsset className="font-lg text-4xl" /> <p className="text-justify px-5 text-xl">Não perca mais partidas naquele seu jogo preferido por que deu "LAG".</p>
            </div>
          </div>
          <div className="topics-content">

          </div>
        </div>
        <div className="bg-white w-full rounded-lg max-w-lg  mx-auto">
          <Form></Form>
        </div>
      </div>
      <Topics></Topics>
    </main>
  )
}

export default MainContent;