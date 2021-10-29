import React from 'react'

function Header() { 
    return (
        <header>
            <div className="header bg-light">
                <div className="container flex mx-auto p-2 justify-between text-lg text-primary font-bold">
                    <div className="band-logo text-center">
                        <img src="https://omnixperience.com.br/wp-content/uploads/2020/11/omnix_logo-1.svg" alt="omnix-logo" width="140px" height="35px"></img>
                    </div>
                    <div className="flex items-center number-call">
                        0800 000 000
                    </div>
                 </div>
            </div>          
        </header>
    )
}

export default Header