import React from 'react';
import Header from '../../components/header/Header';
import CepInfos from '../../components/cepInfo/CepInfos'



const OffersPage = () => {




    return (
        <div className="wrapper h-screen">
            <Header></Header>
            <main className="bg-primary">
                <CepInfos></CepInfos>
            </main>
        </div>
        
    )
}

export default OffersPage;