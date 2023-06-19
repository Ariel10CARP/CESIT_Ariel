class Auto {
  auto: string;
  maxVel: number;

  constructor(auto: string, maxVel: number) {
    this.auto = auto;
    this.maxVel = maxVel;
  }

  calcularTiempo(distancia: number): number {
    return distancia / this.maxVel;
  }
}

const autos: Auto[] = [
  new Auto("Auto1", 100),
  new Auto("Auto2", 120),
  new Auto("Auto3", 140),
  new Auto("Auto4", 180),
  new Auto("Auto5", 200),
];

for (const auto of autos) {
  console.log(`auto: ${auto.auto}, Velocidad Máxima: ${auto.maxVel}`);
}

const distanciaRecorrer = 100;
for (const auto of autos) {
  const tiempo = auto.calcularTiempo(distanciaRecorrer);
  console.log(`El auto ${auto.auto} tarda ${tiempo.toFixed(2)} horas en recorrer ${distanciaRecorrer} kms.`);
}
