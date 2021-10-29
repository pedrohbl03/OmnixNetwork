import axios from 'axios';
import { useHistory } from 'react-router';
import { useLocale } from '../../providers/auth';


function Form() {

  const history = useHistory();
  const { userLocation, setLocation } = useLocale();


  function onSubmit(event) {

    event.preventDefault();
    axios.get(`https://viacep.com.br/ws/${userLocation.cep}/json`)
      .then(res => {

        if (res.data.erro !== true) {

          const userLocation = {
            cep: res.data.cep.replace('-', ''),
            street: res.data.logradouro,
            region: res.data.bairro,
            city: res.data.localidade,
            cep_error: res.data.erro,
            auth: true,
          }

          setLocation(userLocation)
          history.push('/offers');

        }
        else {
          history.push('/');
          setLocation({ cep: '', cep_error: true });
        }
      })
      .catch(err => {
        console.log('Parece que estamos com problemas: ' + err)
      })
  }

  return (
    <div className="Form p-10 ">
      <form className="" id="form" onSubmit={onSubmit}>
        <div className="tittle-wrapper">
          <p className="text-center font-bold">VEJA SE ESTAMOS NO SEU BAIRRO</p>
        </div>
        <div className="input-wrapper pt-20">


          {(userLocation.cep_error) && (
            <p className="text-red-500 text-xs">CEP inválido, por favor digite novamente.</p>
          )
          }

          <label htmlFor="cep" className="py-3 font-bold">Digite seu CEP</label>
          <input
            className="form-input w-full px-4 my-2 rounded-md"
            type="text"
            id="cep"
            placeholder="00000000"
            maxLength="8"
            value={userLocation.cep}
            onChange={(e) => setLocation({ cep: e.target.value })}
            pattern="[0-9]+" />
        </div>
        <div className="button-wrapper pt-20">
          <button
            className="bg-transparent hover:bg-primary text-primary font-bold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
            type="submit"
          >Consultar</button>
        </div>
      </form>
    </div>
  )
}

export default Form;