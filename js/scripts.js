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
  const row = document.createElement('div');
  const cell = document.createElement('div');
  for (let intento = 0; intento < attempts; intento++) {
    //hace hasta 5 jugadas
    row.classList.add('createRow');
    for (let letter = 0; letter < length; letra++) {}
  }
};
