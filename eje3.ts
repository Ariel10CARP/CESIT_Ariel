class CuentaBancaria {
    private fondos: number;
  
    constructor() {
      this.fondos = 0;
    }
  
    asignarFondos(monto: number) {
      if (monto > 500000) {
        this.dispararAlarma("Asignación de fondos superior a 500000");
      }
      this.fondos += monto;
    }
  
    sacarFondos(monto: number) {
      if (monto > this.fondos) {
        this.dispararAlarma("Intento de retiro superior al saldo disponible");
      } else if (monto > 100000) {
        this.dispararAlarma("Intento de retiro superior a 100000");
      } else {
        this.fondos -= monto;
      }
    }
  
    private dispararAlarma(mensaje: string) {
      console.log("¡Alarma!", mensaje);
    }
  }
  //////////////////////////////////////////////////////////

  const cuenta = new CuentaBancaria();
cuenta.asignarFondos(600000);
cuenta.sacarFondos(200000); 
