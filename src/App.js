// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a><h1>T</h1>
    //   </header>
      
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
      <div class='Inicio'>
        <h1>
          Pergunta N1º
        </h1>
        <p>
          Pontuação Total: 0
        </p>
      </div>
      <div class='Meio'> 
        <p>
          Pergunta:<br></br><br></br>
          Teste Pergunta
        </p>
        <div class="respostas">
          <button class="btn">
            Learn more
          </button>
          <button class="btn">
            Learn more
          </button>
          <button class="btn">
            Learn more
          </button>
          <button class="btn">
            Learn more
          </button>
        </div>
          
      </div>
      {/* <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul> */}

    </main>

    </div>
  );
}

export default App;
