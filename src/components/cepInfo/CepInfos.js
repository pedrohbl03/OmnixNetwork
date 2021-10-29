import React from 'react'
import { useLocale } from '../../providers/auth';


function CepInfos() {

  const { userLocation } = useLocale()

  return (
    <div className="container p-2 mx-auto bg-primary">
      <div className="md:max-w-sm container-cep bg-white p-5 rounded-lg">
        <div className="card-tittle">
          <h4 className="font-bold">Sua localização</h4>
        </div>
        <div className="flex py-2 border-solid border-b-4 border-primary street-infos justify-between">
          <h4 className="font-bold">CEP: </h4>
          <p className="">{userLocation.cep}</p>
        </div>
        <div className="flex py-2 border-solid border-b-4 border-primary street-infos justify-between">
          <h4 className="font-bold">Rua: </h4>
          <p className="">{userLocation.street}</p>
        </div>
        <div className="flex py-2 border-solid border-b-4 border-primary street-infos justify-between">
          <h4 className="font-bold">Bairro: </h4>
          <p className="">{userLocation.region}</p>
        </div>
        <div className="flex py-2 street-infos justify-between">
          <h4 className="font-bold">Cidade:</h4>
          <p className="">{userLocation.city}</p>
        </div>
      </div>
    </div>
  )
}

export default CepInfos