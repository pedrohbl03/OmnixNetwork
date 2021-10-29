import React from 'react';
import { IoIosRocket, IoIosWifi} from "react-icons/io";
import { BsShieldFillCheck } from "react-icons/bs";



function Topics() { 
    return (   
            <div className="topics-container text-white">
                <div className="container p-10 mx-auto area-text-center font-bold">
                    <p>Olha aqui embaixo os beneficios que nossa banda larga pode te oferecer:</p>
                </div>
                <div className="container p-10 topics-content flex mx-auto 2xl:justify-center flex-wrap lg:flex-row flex-col text-center pt-4 pb-10">
                    <div className="topic-item flex-1">
                        <div className="flex items-center background-topic w-20 h-20 bordered rounded-full mx-auto bg-white border-2 border-gray-300 transform hover:scale-110 shadow hover:shadow-xl transition duration-500 ease-in-out">
                            <IoIosRocket className="text-5xl mx-auto text-primary"/>
                        </div>
                        <h4 className="font-bold py-2">CONEXÃO SEM LIMITES</h4>
                        <p className="pb-10">Navegue a vontade sem se preocupar com o consumo de dados. Acesse os seus serviços favoritos à vontade.</p>
                    </div>
                    <div className="topic-item flex-1">
                        <div className="flex items-center background-topic w-20 h-20 bordered rounded-full mx-auto bg-white border-2 border-gray-300 transform hover:scale-110 shadow hover:shadow-xl transition duration-500 ease-in-out">
                            <BsShieldFillCheck className="text-5xl mx-auto text-primary"/>
                        </div>
                        <h4 className="font-bold py-2">INTERNET CONFIÁVEL</h4>
                        <p className="pb-10">Chega dessas empresas que não entregam a velocidade contratada! Com a Omnix Network você vai utilizar a internet que contratou, sem desculpas.</p>
                    </div>
                    <div className="topic-item flex-1"> 
                        <div className="flex items-center background-topic w-20 h-20 bordered rounded-full mx-auto bg-white border-2 border-gray-300 transform hover:scale-110 shadow hover:shadow-xl transition duration-500 ease-in-out">
                            <IoIosWifi className="text-5xl mx-auto text-primary"/>
                        </div>
                        <h4 className="font-bold py-2">WI-FI GRÁTIS</h4>
                        <p className="pb-10">Aproveite a melhor internet sem precisar se preocupar com cabos. Na Omnix Network o WI-FI é grátis*!</p>
                    </div>
                </div>
            </div>
    )
}

export default Topics