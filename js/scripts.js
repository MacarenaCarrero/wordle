const rootStyles = document.documentElement.style;
const boxGameElement = document.getElementById('boxGame');
const wordElement = document.getElementById('word');

const ALL_WORDS = [
  'zara',
  'pelo',
  'humo',
  'chasqueador',
  'zombie',
  'atropello',
  'ticket',
  'infectado',
  'hambre',
  'accidente',
  'vitrina',
  'apocalipsis',
  'supervivencia',
  'sangre',
  'hongo',
  'cordyceps'
];

const selectWord = //palabra aleatoria del array
  ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)].toLowerCase();
//saber el largo de la palabra
const length = selectWord.length;

const attempts = 5; // INTENTOS const o let ?¿ si tiene que cambiar

const gameBoard = () => {
  for (let intento = 0; intento < attempts; intento++) {
    const row = document.createElement('div');
    row.classList.add('createRow');

    for (let letra = 0; letra < length; letra++) {
      const cell = document.createElement('div');
      cell.classList.add('createCell');
      row.appendChild(cell);
    }

    boxGameElement.appendChild(row);
  }
};
