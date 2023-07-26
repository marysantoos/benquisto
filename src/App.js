import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Conteudo from './componentes/Conteudo'
import Rodapé from './componentes/Rodapé'
/*arquivo App jsx 
componente funcional = porque ele é uma função*/
function App() {



/*todo componente deve retornar um html entre parenteses */

  return (  
  /*O React substitui o className por class pq class é palavra reservada do js */
    <>
    {/*nosso cabecalho tem uma propriedade chamada titulo*/}
    <Cabecalho logo="logo192.png" titulo="Benquisto" subtitulo="O melhor gerenciador de favoritos do mundo!"/>
    <Conteudo/>
    <Rodapé />
    </>
  );
}
export default App;
