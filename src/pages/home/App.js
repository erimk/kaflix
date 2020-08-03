import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';


function Home() {
  return (
    <div style={{background:"#141414"}}>
      <Menu />
     {/* <h1> Hello world</h1>
      Update automático (Hot load)
      jsx, já vem com o react. é Html JSX -> [J]ava[S]cript [X]ML */}
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"Afinal, o que faz um dev front-end?"}
        />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}/>
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}/>
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}/>
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}/>
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}/>
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}/>
      <Footer />
    </div>
  );
}

export default Home;
