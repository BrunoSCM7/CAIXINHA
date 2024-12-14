function calcular() {
  // Obter o número de funcionários, meses trabalhados e valor arrecadado
  const numFuncionarios = parseInt(
    document.getElementById("numFuncionarios").value
  );
  const mesesInput = document.getElementById("meses").value;
  const valorInput = parseFloat(document.getElementById("valor").value);

  // Verificar se os campos não estão vazios
  if (!numFuncionarios || !mesesInput || !valorInput || isNaN(valorInput)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Converter os meses inseridos em um array de números
  const mesesTrabalhados = mesesInput
    .split(",")
    .map((mes) => parseInt(mes.trim()));

  // Verificar se o número de meses corresponde ao número de funcionários
  if (mesesTrabalhados.length !== numFuncionarios) {
    alert("O número de meses não corresponde ao número de funcionários.");
    return;
  }

  // Calcular a soma dos meses trabalhados
  const somaMeses = mesesTrabalhados.reduce((acc, mes) => acc + mes, 0);

  // Calcular o valor por mês
  const valorPorMes = valorInput / somaMeses;

  // Calcular o valor de cada funcionário
  let resultados = mesesTrabalhados.map((mes) =>
    (mes * valorPorMes).toFixed(2)
  );

  // Exibir os resultados
  let resultadoTexto = "<h3>Distribuição:</h3>";
  resultados.forEach((valor, index) => {
    resultadoTexto += `<p>Funcionário com ${mesesTrabalhados[index]} meses: R$ ${valor}</p>`;
  });

  document.getElementById("resultado").innerHTML = resultadoTexto;
}
