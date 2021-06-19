// Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. Milestone 2 Coloriamo le icone per tipo
// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone


const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];


// Milestone 2 Coloriamo le icone per tipo

const iconeColorate = icons.map((element) => {
    const {type} = element;
    let colore = 'orange';
    if (type == 'user') {
        colore = 'red';
    } else if (type == 'animal') {
        colore = 'blue'
    } 
    return {...element,colore}

});


//   Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
const show = (array) => {
  document.getElementById('icons-container').innerHTML = '';

  array.forEach((element,index) => {
    const {name,prefix,type,family,colore} = element;
    document.getElementById('icons-container').innerHTML +=
    `
    <div class="icon">
        <div class="icon_inside">
            <i class= '${family} ${prefix}${name}' style ='color : ${colore}'></i>
            <h5 class='nome'>${name.toUpperCase()}</h5>
        </div>
    </div>
    `;
  });

};

show(iconeColorate);



// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone

// creiamo un array con 3 tipi di icone 
const typeArrey = [];
iconeColorate.forEach((element) => {
  const {type} = element;
  if (!typeArrey.includes(type)){
    typeArrey.push(type);
    document.getElementById('seleziona').innerHTML += 
      ` 
        <option value="${type}">${type}</option>
      `
      ;
  }
});
// al camabiare della  select mostro le icone per tipo 
const select = document.getElementById('seleziona');
select.addEventListener('change', function () {
  const selezionato = select.value;
  const iconFiltrateTipo = iconeColorate.filter((element) => {
    return element.type == selezionato;
  });
  show(iconFiltrateTipo);
  if (selezionato == 'all') {
    show(iconeColorate);
  }
});

// dichiaro il contenitore su cui voglio ascoltare gli eventi
let parent = document.getElementById('icons-container');

// funzione show il risultato in baso all'evento 
const showselect = (event)=> {
  parent.innerHTML = '';
  parent.innerHTML = event + '<div class="description animated"></div> <div class ="appeare animated">  <i  class="fas fa-arrow-left"></i> </div>';
}

const selectIcon = (event)=> {
  // raccologo  tutti gli eventi possibili nel container main
  if (event.target.className == 'icon') {
    showselect(event.target.outerHTML); 

  } else if (event.target.className == 'fas fa-arrow-left') {
    parent.innerHTML = '';
    show(iconeColorate);
  } else if (event.target.className == "icon_inside"){
    let parents = event.target.parentElement;
    showselect(parents.outerHTML);
  } else if (event.target.className == "container-main" || event.target.className == "description animated" ){
  } else {
    console.log(event.target);
    let parents = event.target.parentElement.parentElement;
    showselect(parents.outerHTML);
  }
  event.stopPropagation();
}
// Add eventListener to parent
parent.addEventListener('click', selectIcon, false);









