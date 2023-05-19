import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  color: black;
  font-family: 'Courier New', Courier, monospace;
`;

const Label = styled.label`
  font-family: 'Courier New', Courier, monospace;
  font-size: larger;
`;

const Input = styled.input`
  width: 80px;
  height: 25px;
`;

const Result = styled.div`
  margin-top: 20px;
`;

function CalculadoraJurosCompostos() {
  const [valorInicial, setValorInicial] = useState<number | ''>(0);
  const [taxaJurosAnual, setTaxaJurosAnual] = useState<number | ''>(0);
  const [periodoAnos, setPeriodoAnos] = useState<number | ''>(0);
  const [aporteMensal, setAporteMensal] = useState<number | ''>(0);
  const [valorFinal, setValorFinal] = useState<number>(0);
  const calcularJurosCompostos = () => {
    const taxaJurosMensal = (1 + Number(taxaJurosAnual) / 100) ** (1 / 12) - 1;
    const periodoMeses = Number(periodoAnos) * 12;

    let valorInvestido = Number(valorInicial);

    for (let i = 0; i < periodoMeses; i++) {
      valorInvestido += Number(aporteMensal);
      valorInvestido *= 1 + taxaJurosMensal;
    }

    setValorFinal(valorInvestido);
  };

  useEffect(() => {
    calcularJurosCompostos();
  }, [valorInicial, taxaJurosAnual, periodoAnos, aporteMensal]);

  const formatarValorFinal = (valor: number) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <Container>
      <Heading>Calculadora de Juros Compostos com Aporte Mensal</Heading>
      <div>
        <Label>Valor Inicial:</Label>
        <Input
          type="number"
          value={valorInicial === 0 ? '' : valorInicial}
          onChange={(e) => setValorInicial(Number(e.target.value))}
        />
      </div>
      <div>
        <Label>Taxa de Juros Anual (%):</Label>
        <Input
          type="number"
          value={taxaJurosAnual === 0 ? '' : taxaJurosAnual}
          onChange={(e) => setTaxaJurosAnual(Number(e.target.value))}
        />
      </div>
      <div>
        <Label>Período (Anos):</Label>
        <Input
          type="number"
          value={periodoAnos === 0 ? '' : periodoAnos}
          onChange={(e) => setPeriodoAnos(Number(e.target.value))}
        />
      </div>
      <div>
        <Label>Aporte Mensal:</Label>
        <Input
          type="number"
          value={aporteMensal === 0 ? '' : aporteMensal}
          onChange={(e) => setAporteMensal(Number(e.target.value))}
        />
      </div>
      <Result>
        <Label>Valor Final:</Label>
        <span>{formatarValorFinal(valorFinal)}</span>
      </Result>
    </Container>
  );
}

export default CalculadoraJurosCompostos;
