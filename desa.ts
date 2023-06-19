interface FormaGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
  }
  
  class Rectangulo implements FormaGeometrica {
    constructor(private base: number, private altura: number) {}
  
    calcularArea(): number {
      return this.base * this.altura;
    }
  
    calcularPerimetro(): number {
      return 2 * (this.base + this.altura);
    }
  }
  
  class Circulo implements FormaGeometrica {
    constructor(private radio: number) {}
  
    calcularArea(): number {
      return Math.PI * Math.pow(this.radio, 2);
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  
  const rectangulo = new Rectangulo(5, 3);
  console.log("Área del rectángulo:", rectangulo.calcularArea());
  console.log("Perímetro del rectángulo:", rectangulo.calcularPerimetro());
  
  const circulo = new Circulo(2);
  console.log("Área del círculo:", circulo.calcularArea());
  console.log("Perímetro del círculo:", circulo.calcularPerimetro());