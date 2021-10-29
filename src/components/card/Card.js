import React from 'react'

function Card(props) {
  return (
    <div className="card-container flex justify-center p-5 bg-white rounded-lg mx-5 my-5 shadow-lg">
      <div className="card">
        <div className="card-header pb-3 font-bold">
          <div className="internet-banda text-primary text-2xl">
            <h5>{props.banda}</h5>
          </div>
          <div className="internet-price text-lg">
            <p>{props.price}</p>
          </div>
        </div>
        <div className="card-main">
          <div className="internet-benefices">
            <div className="internet-download flex">
              <p className="font-bold pr-2">Download: </p>
              <p>{props.download}</p>
            </div>
            <div className="internet-upload flex">
              <p className="font-bold pr-2">Upload:</p>
              <p>{props.upload}</p>
            </div>
            <div className="wifi flex">
              <p className="font-bold pr-2">Wifi:</p>
              <p>{props.wifi}</p>
            </div>
            <div className="installation flex">
              <p className="font-bold pr-2">Instalação:</p>
              <p>{props.installation}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="button subscribe">
            <button className="bg-primary rounded-lg text-white text-bold mt-3 p-2"> Assinar agora </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card