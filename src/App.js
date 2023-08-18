// import logo from './logo.svg';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];

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
          <p>
            T COMPANY
          </p>
        </div>
        <div class="Menu">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="opts">Option 1</a>
          <a href="https://www.videos.com/" target="_blank" rel="noopener noreferrer" class="opts">Option 2</a>
          <a href="https://animesgames.net/" target="_blank" rel="noopener noreferrer" class="opts">Option 3</a>
        
          <div id="divBusca">
            <input class="busca" type="text" id="txtBusca" placeholder="Search"/>
          </div>
        </div>
      </header> 
    
    <main>
      <div class='Inicio'>
        <h1>
          Effective<br></br>
          advertising
        </h1>
        <p>
          Best solutions for online marketing
        </p>
      </div>
      <div class='Meio'> 
        <p>Por que o esqueleto não brigou com ninguém? Porque ele não tinha estômago para isso!

          Qual é o doce preferido do átomo? O algodão-doce!

          O que uma impressora disse à outra? "Essa folha é sua ou é uma impressão minha?"

          Por que o computador foi ao médico? Porque estava com vírus!

          O que o zero disse para o oito? "Uau, que cinto maneiro!"

          Como o oceano cumprimenta o outro oceano? Ele acena!

          O que um pão disse para o outro pão? "Vamos ser amigos, você é massa!"

          Por que o livro de matemática parecia triste? Porque tinha muitos problemas.

          O que aconteceu com o ladrão que roubou um calendário? Ele pegou 12 meses de prisão!

          Por que o piano não pode se levantar sozinho? Porque ele tem pernas de pau!
          
          </p>
          <button class="btn">
            Learn more
          </button>
      </div>
      <ul>
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
      </ul>

    </main>

    </div>
  );
}

export default App;
