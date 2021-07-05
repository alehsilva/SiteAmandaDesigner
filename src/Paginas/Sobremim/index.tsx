import React from 'react';
import Boneca from '../../imagens/boneca.png'
import './estilo.css';

function Sobremim() {
    return (
        <div id="principal">
            <div className="corpo">
                <div className="square">
                    

                        <h1>SOBRE MIM</h1>
                        <br/>
                        <p>&nbsp;&nbsp;<b className='aspas'>"</b>  Sou Amanda Caroline, moro na cidade de 
                        São Mateus do Sul no Paraná.
                        Trabalho profissionalmente como designer de unhas a quatro anos.
                        Mas a minha paixão por unhas iniciou aos meus 13 anos de idade, 
                        quando fiz o meu primeiro curso na área.
                        Também sou graduada em administração e atualmente tenho meu próprio negócio. 
                        <b className='aspas'>"</b></p>                       
                    
                </div>
                  

                    <div className="boneca"><img src={Boneca} alt="Mascote Menina" /></div>
                </div>
      
        </div>
        
           
    )
}

export default Sobremim;