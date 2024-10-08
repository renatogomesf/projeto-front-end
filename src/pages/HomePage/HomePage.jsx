import Gallery from "../../components/gallery/Gallery";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/productListing/ProductListing";

import collection1 from "../../img/collection-1.png"
import collection2 from "../../img/collection-2.png"
import collection3 from "../../img/collection-3.png"
import jordan from "../../img/jordan.png"


import { CollectionDestaque01, CollectionDestaque02, OfertaEspecial } from './HomePageStyle';
import { Hat, Headphones, Pants, Sneakers, Tshirt } from "./HomePageSVG";


const HomePage = () => {

    const slideHome = [
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-7.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-1.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-2.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-3.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-4.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-5.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-6.jpeg"},
        {src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-8.jpeg"}
    ]

    return (
        <>
            <Gallery slide = {slideHome} autoplay={true} pagination = {true} navigation = {false}/>



            <Section flexDirection = {"column"} titleAlign = {"left"} title={"Coleções em destaque"} link={{text:"", href: ""}}>

                <CollectionDestaque01>
                    <div className="Destaque01" >
                        <img className="imgDestaque" src={collection1} alt="coleção em destaque" />

                        <div className="informacao">
                            <span className="tagOferta">30% OFF</span>
                            <p className="tituloColecao">Novo drop Supreme</p>
                            <button className="btnComprar"> Comprar </button>
                        </div>
                    </div>
                    
                    <div className="Destaque01" >
                        <img className="imgDestaque" src={collection2} alt="coleção em destaque" />

                        <div className="informacao">
                            <span className="tagOferta">30% OFF</span>
                            <p className="tituloColecao">Coleção Adidas</p>
                            <button className="btnComprar"> Comprar </button>
                        </div>
                    </div>

                    <div className="Destaque01" >
                        <img className="imgDestaque" src={collection3} alt="coleção em destaque" />

                        <div className="informacao">
                            <span className="tagOferta">30% OFF</span>
                            <p className="tituloColecao titulo3">Novo Beats Bass</p>
                            <button className="btnComprar"> Comprar </button>
                        </div>
                    </div>
                </CollectionDestaque01>

            </Section>



            <Section flexDirection = {"column"} titleAlign = {"center"} title={"Coleções em destaque"} link={{text:"", href: ""}}>

                <CollectionDestaque02>
                    <div className="Destaque02" >
                        <div className="svgDestaque">
                            <Tshirt/>
                        </div>
                        <p>Camisetas</p>
                    </div>

                    <div className="Destaque02" >
                        <div className="svgDestaque">
                            <Pants/>
                        </div>
                        <p>Calças</p>
                    </div>

                    <div className="Destaque02" >
                        <div className="svgDestaque">
                            <Hat/>
                        </div>
                        <p>Bonés</p>
                    </div>

                    <div className="Destaque02" >
                        <div className="svgDestaque">
                            <Headphones/>
                        </div>
                        <p>Headphones</p>
                    </div>

                    <div className="Destaque02" >
                        <div className="svgDestaque">
                            <Sneakers/>
                        </div>
                        <p>Tênis</p>
                    </div>
                </CollectionDestaque02>

            </Section>



            <Section flexDirection = {"column"} titleAlign = {"left"} title={"Produtos em alta"} link={{text:"Ver todos", to: "/produtos"}}>
                <ProductListing qtdColuna = {"4"} qtdCards = {"8"} gap = {"24px"}/>
            </Section>



            <OfertaEspecial>
                <div>
                    <img src={jordan} alt="air jordan" /> 
                </div>
                <div className="campoTexto">
                    <p className="texto01">Oferta especial</p>
                    <h2 className="titulo">Air Jordan edição de colecionador</h2>
                    <p className="texto02">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <button className="btnVerOferta">Ver Oferta</button>
                </div>
            </OfertaEspecial>
        </>
    );
}
 
export default HomePage;