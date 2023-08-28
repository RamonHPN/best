// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    // </div>
    <div>
      <header>
        <div class='Logo'>
          <h2>
            Quiz Total
          </h2>
        </div>
        {/* <div class="Menu">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="opts">Option 1</a>
          <a href="https://www.videos.com/" target="_blank" rel="noopener noreferrer" class="opts">Option 2</a>
          <a href="https://animesgames.net/" target="_blank" rel="noopener noreferrer" class="opts">Option 3</a>
        
          <div id="divBusca">
            <input class="busca" type="text" id="txtBusca" placeholder="Search"/>
          </div>
        </div> */}
      </header> 
    
    <main>
      
      <div class="geral">

        <div class="parte1">

          <div class="divPergunta">
            <h1 class="pergunta">Pergunta 1</h1>

          </div>

          <div class="divPontos">
            <h3 class="pontos">Pontos:</h3>
            <h2>0</h2>
          </div>

        </div>

        <div class="parte2">
          <div class="opts">
            <button class="btnOpt"><p>Opção 1</p></button>
            <button class="btnOpt"><p>Opção 2</p></button>
            <button class="btnOpt"><p>Opção 3</p></button>
            <button class="btnOpt"><p>Opção 4</p></button>
          </div>
          
          <div class="divProxPergunta">
            <button class="btnProxPergunta"><p>Próxima Pergunta</p></button>
          </div>


        </div>

      </div>

    </main>

    </div>
  );
}

export default App;
