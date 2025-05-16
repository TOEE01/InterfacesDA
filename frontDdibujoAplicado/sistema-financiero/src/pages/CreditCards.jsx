const CreditCards = () => (
  <div className="page-container">
    <h1>Gestión de Tarjetas de Crédito</h1>
    <form>
      <label>Número de tarjeta:</label>
      <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />

      <label>Nombre del titular:</label>
      <input type="text" />

      <label>Fecha de expiración:</label>
      <input type="month" />

      <label>CVV:</label>
      <input type="password" maxLength="4" />

      <button type="submit">Guardar Tarjeta</button>
    </form>
  </div>
);

export default CreditCards;
