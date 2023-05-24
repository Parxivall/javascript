const botao = document.getElementById('botao');
const input = document.getElementById('CadastroBairro');
const divItens = document.getElementById('divItens');

let itens = [];
getLocalStorage();

botao.addEventListener('click', () => {
  const nombreUsuario = prompt('Digite um nome para armazenar o seu endeço:');
  if (!nombreUsuario) {
    alert('Você deve fornecer um nome para armazenar o seu endereço');
    return;
  }

  const ciudad = document.getElementById('floatingSelect').value;
  const bairro = document.getElementById('CadastroBairro').value;
  const rua = document.getElementById('CadastroRua').value;
  const numeroCasa = document.getElementById('CadastroNumeroCasa').value;
  const pontoReferencia = document.getElementById('CadastroPontoReferencia').value;
  const cep = document.getElementById('CadastroCEP').value;
  const objetivo = document.getElementById('floatingTextarea2').value;
  
  if (ciudad === "seleccione a ciudad donde mora" || bairro === "" || rua === "" || numeroCasa === "" || pontoReferencia === "" || cep === "" || objetivo === "") {
    alert("Por favor, complete todos los campos antes de enviar el formulario.");
    return;
  }
  
  const formulario = {
    nombreUsuario,
    ciudad,
    bairro,
    rua,
    numeroCasa,
    pontoReferencia,
    cep,
    objetivo
  };

  itens.push(formulario);
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
            ${i} - ${item.nombreUsuario}
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
  const formulario = itens[index]; 

  document.getElementById('floatingSelect').value = formulario.ciudad;
  document.getElementById('CadastroBairro').value = formulario.bairro;
  document.getElementById('CadastroRua').value = formulario.rua;
  document.getElementById('CadastroNumeroCasa').value = formulario.numeroCasa;
  document.getElementById('CadastroPontoReferencia').value = formulario.pontoReferencia;
  document.getElementById('CadastroCEP').value = formulario.cep;
  document.getElementById('floatingTextarea2').value = formulario.objetivo;

  const formularioEditado = obtenerDatosFormulario(); 
  
    itens[index].ciudad = formularioEditado.ciudad;
    itens[index].bairro = formularioEditado.bairro;
    itens[index].rua = formularioEditado.rua;
    itens[index].numeroCasa = formularioEditado.numeroCasa;
    itens[index].pontoReferencia = formularioEditado.pontoReferencia;
    itens[index].cep = formularioEditado.cep;
    itens[index].objetivo = formularioEditado.objetivo;

  adicionarItens();
  addLocalStorage();
}

function obtenerDatosFormulario() {
  const ciudad = document.getElementById('floatingSelect').value;
  const bairro = document.getElementById('CadastroBairro').value;
  const rua = document.getElementById('CadastroRua').value;
  const numeroCasa = document.getElementById('CadastroNumeroCasa').value;
  const pontoReferencia = document.getElementById('CadastroPontoReferencia').value;
  const cep = document.getElementById('CadastroCEP').value;
  const objetivo = document.getElementById('floatingTextarea2').value;

  return {
    ciudad,
    bairro,
    rua,
    numeroCasa,
    pontoReferencia,
    cep,
    objetivo
  };
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

function vaciar() {
  input.value = '';
  document.getElementById('floatingSelect').selectedIndex = 0;
  document.getElementById('CadastroRua').value = '';
  document.getElementById('CadastroNumeroCasa').value = '';
  document.getElementById('CadastroPontoReferencia').value = '';
  document.getElementById('CadastroCEP').value = '';
  document.getElementById('floatingTextarea2').value = '';
}
