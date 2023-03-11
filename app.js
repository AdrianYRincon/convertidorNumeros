const input = document.querySelector('#number');
const resultados = document.querySelector('.resultados');
const form = document.querySelector('.form');


let = 0;

form.addEventListener('submit',e => {

  e.preventDefault();

  const convertido = document.querySelector('.convertidos');

  if(convertido) {
   resultados.removeChild(resultados.firstChild);
  }

  if(number==='' || parseInt(number)===NaN ){
    console.log('Debes digitar un decimal');
    return;
  }


  const { binario,sexagesimal,octal,hexadecimal} = convertirNumeros(parseInt(number));

  const div = document.createElement('div');
  div.classList.add('convertidos');
  div.innerHTML = `
  <p>Binario: ${binario}</p>
  <p>Sexadecimal: ${sexagesimal}</p>
  <p>Octal: ${octal}</p>
  <p>Hexadecimal: ${hexadecimal}</p>
  `
  resultados.appendChild(div);

});

input.addEventListener('change', e=> {
  number = e.target.value
});


function convertirNumeros(numero) {
  // Convertir a binario
  const binario = numero.toString(2);

  // Convertir a sexagesimal
  const sexagesimal = numero.toString(6);

  // Convertir a octal
  const octal = numero.toString(8);

  // Convertir a hexadecimal
  const hexadecimal = numero.toString(16);

  // Devolver los resultados como un objeto
  return {
    binario,
    sexagesimal,
    octal,
    hexadecimal
  };
}


