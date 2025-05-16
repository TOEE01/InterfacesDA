const DebitCards = () => (
  <div className="page-container">
    <h1>Gestión de Tarjetas de Débito</h1>
    <form>
      <label>Número de tarjeta:</label>
      <input type="text" />

      <label>Nombre del titular:</label>
      <input type="text" />

      <label>Banco:</label>
      <input type="text" />

      <label>Fecha de vencimiento:</label>
      <input type="month" />

      <button type="submit">Guardar Tarjeta</button>
    </form>
  </div>
);

export default DebitCards;
