function calcular() {
  const numFuncionarios = document.getElementById("numFuncionarios").value;
  const valorArrecadado = document.getElementById("valor").value;
  const mesesInput = document.getElementById("meses").value;
  const mesesTrabalhados = mesesInput.split(",").map((m) => parseInt(m.trim()));

  if (
    !numFuncionarios ||
    !valorArrecadado ||
    mesesTrabalhados.length !== parseInt(numFuncionarios)
  ) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  let somaMeses = mesesTrabalhados.reduce((acc, cur) => acc + cur, 0);
  const valorPorMes = valorArrecadado / somaMeses;

  let resultados = "";
  for (let i = 0; i < numFuncionarios; i++) {
    let valorRecebido = valorPorMes * mesesTrabalhados[i];
    resultados += `<p>Funcionário ${i + 1} (meses: ${
      mesesTrabalhados[i]
    }): R$ ${valorRecebido.toFixed(2)}</p>`;
  }

  document.getElementById("resultado").innerHTML = resultados;
}

// Função para mostrar o modal de ajuda
function mostrarAjuda() {
  document.getElementById("ajudaModal").style.display = "block";
}

// Função para fechar o modal de ajuda
function fecharAjuda() {
  document.getElementById("ajudaModal").style.display = "none";
}
