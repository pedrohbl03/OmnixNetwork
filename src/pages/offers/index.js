import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer'
import CepInfos from '../../components/cepInfo/CepInfos';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';



const OffersPage = () => {




  return (
    <div className="wrapper">
      <Header></Header>
      <main className="bg-primary">
        <CepInfos></CepInfos>
        <div className="container mx-auto px-2 content-cards text-center py-10">
          <h3 className="text-white font-bold text-2xl">Ofertas disponiveis</h3>
          <div className="container flex flex-row flex-wrap justify-center sm:justify-start lg:justify-center">
            <Card banda="100 MB" price="R$ 100" download="100MB" upload="20MB" wifi="incluso" installation="Grátis"></Card>
            <Card banda="200 MB" price="R$ 100" download="200MB" upload="20MB" wifi="incluso" installation="Grátis"></Card>
            <Card banda="300 MB" price="R$ 100" download="300MB" upload="20MB" wifi="incluso" installation="Grátis"></Card>
          </div>
        </div>
        <Button></Button>
      </main>
      <Footer></Footer>
    </div>

  )
}

export default OffersPage;