const ElectricityBills = () => (
  <div className="page-container">
    <h1>Subir Recibo de Energía Eléctrica</h1>
    <form>
      <label>Mes facturado:</label>
      <input type="month" />

      <label>Monto:</label>
      <input type="number" step="0.01" />

      <label>Subir recibo (PDF o imagen):</label>
      <input type="file" />

      <button type="submit">Guardar Recibo</button>
    </form>
  </div>
);

export default ElectricityBills;
