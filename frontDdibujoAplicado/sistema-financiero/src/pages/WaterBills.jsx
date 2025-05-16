const WaterBills = () => (
  <div className="page-container">
    <h1>Subir Recibo de Agua</h1>
    <form>
      <label>Mes facturado:</label>
      <input type="month" />

      <label>Monto:</label>
      <input type="number" step="0.01" />

      <label>Subir archivo:</label>
      <input type="file" />

      <button type="submit">Guardar Recibo</button>
    </form>
  </div>
);

export default WaterBills;
