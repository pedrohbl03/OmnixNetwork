import axios from 'axios';
import { useHistory } from 'react-router';
import { useLocale } from '../../providers/auth';


function Form() { 

    const history = useHistory();
    const {userLocation, setLocation} = useLocale ('');


    function onSubmit (event) {
        event.preventDefault();
        
        axios.get(`https://viacep.com.br/ws/${userLocation.cep}/json`)
            .then(res => {
                console.log(res);
                userLocation.street = res.data.logradouro;
                userLocation.region = res.data.bairro;
                userLocation.city = res.data.localidade;
                userLocation.cep_error = res.data.erro;

                if (userLocation.cep_error !== true) {
                    userLocation.auth = true;
                    history.push('/offers');
                    console.log(userLocation)
                }
                else {
                    history.push('/');
                    alert('CPF Inválido. Tente novamente');
                }
            })

            .catch (err => {
                console.log('Parece que estamos com problemas: '+ err)
            })
    }

    return (
        <div className="Form p-10 ">
            <form className="" id="form" onSubmit={onSubmit}>
                <div className="tittle-wrapper"> 
                    <p className="text-center font-bold">VEJA SE ESTAMOS NO SEU BAIRRO</p>
                </div>
                <div className="input-wrapper pt-20">
                    <label htmlFor="cep" className="py-3 font-bold">Digite seu CEP</label>
                    <input 
                    className="form-input w-full px-4 my-2 rounded-md"
                    type="text" 
                    id="cep" 
                    placeholder="00000-000"
                    maxLength="8"
                    onChange={(e) => setLocation({cep: e.target.value})}/>
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