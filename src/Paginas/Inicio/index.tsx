import React from 'react';
import './estilo.css';

import Logo from '../../imagens/logo.webp';
import ImagemConteudo from '../../imagens/imagem-conteudo.webp';

import IconFacebook from '../../imagens/icons/icon-facebook.webp';
import IconInstagram from '../../imagens/icons/icon-instagram.webp';
import IconWhatswapp from '../../imagens/icons/icon-whatsapp.webp';

function Inicio() {
    return (
        <div id="corpo">
           
            <div id="principal">
            <div className="conteudo">

                    <div className="midias">
                        <a target='blank' href="https://www.facebook.com/amandac.designer/"><img src={IconFacebook} alt="facebook" /></a>
                        <a target='blank' href="https://www.instagram.com/amandac.designer/"><img src={IconInstagram} alt="instagram" /></a>
                        <a target='blank' href="http://wa.me/554299711386"><img src={IconWhatswapp} alt="whatsapp" /></a>
                    </div>
                    <div className="logo">
                        <img src={Logo} alt="logo do site" />
                    </div>
                    <div className="imagem-corpo">
                        <img src={ImagemConteudo} alt="Imagem de enfeite" />
                    </div>
                    <div className="bloco-botoes">


                    </div>

            </div>

            </div>
        </div>

    )
}

export default Inicio;