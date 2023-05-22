const botao = document.getElementById('botao');
const input = document.getElementById('todos');
const divItens = document.getElementById('divItens');

let itens = [];
getLocalStorage();

botao.addEventListener('click', () => {
  if (input.value) {
    itens.push(input.value);
  }
  adicionarItens();
  addLocalStorage();
});

function adicionarItens() {
  divItens.innerHTML = '';
  itens.forEach((item, i) => {
    let row = document.createElement('div');
    row.className = 'row mt-3';
    row.innerHTML = `
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            ${i} - ${item}
            <button id="estado-btn-${i}" class="btn btn-primary btn-sm" onclick="cambiarEstado(${i})">Concluido</button>
            <button class="btn btn-primary btn-sm" onclick="editar(${i})">Editar</button>
          </div>
        </div>
      </div>
    `;
    divItens.appendChild(row);
  });
}

function cambiarEstado(index) {
  var btn = document.getElementById(`estado-btn-${index}`);
  
  if (btn.innerHTML === 'Concluido') {
    btn.innerHTML = 'Pendiente';
    btn.style.backgroundColor = 'red';
  } else {
    btn.innerHTML = 'Concluido';
    btn.style.backgroundColor = 'green';
  }
}

function editar(index) {
  // Lógica para la función editar
}


function cambiarEstado(index) {
  var btn = document.getElementById(`estado-btn-${index}`);
  
  if (btn.innerHTML === 'Concluido') {
    btn.innerHTML = 'Pendiente';
    btn.style.backgroundColor = 'red';
  } else {
    btn.innerHTML = 'Concluido';
    btn.style.backgroundColor = 'green';
  }
}


function addLocalStorage() {
  localStorage.setItem('itens', JSON.stringify(itens));
}

function getLocalStorage() {
  itens = JSON.parse(localStorage.getItem('itens'));
  if (!itens) {
    itens = [];
    addLocalStorage();
  }
  adicionarItens();
}

function excluir() {
  const idExclusao = prompt('Informe o Id:');
  itens.splice(idExclusao, 1);
  adicionarItens();
  addLocalStorage();
}

function editar(index) {
  const novaInfo = prompt('novaInfo:');
  if (novaInfo) {
    itens[index] = novaInfo;
    adicionarItens();
    addLocalStorage();
  }
}
