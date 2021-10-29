import React from 'react'


function Footer() { 
    return (
        <footer className="h-full">
            <div className="header bg-light">
                <div className="container flex mx-auto p-2 text-lg items-center justify-between text-primary font-bold">
                    <div className="band-logo text-center">
                        <img src="https://omnixperience.com.br/wp-content/uploads/2020/11/omnix_logo-1.svg" alt="omnix-logo" width="140px" height="35px"></img>
                    </div>
                    <div className="sell-number-area px-10">
                        <p>Portal de Privacidade | Política de Privacidade</p>
                        <p>Todos os direitos reservados 2021 Omnix. ©</p>
                    </div>
                    <div className="social-media-area ">
                        Teste
                    </div>
                 </div>
            </div>          
        </footer>
    )
}

export default Footer