const PaymentPlatforms = () => (
  <div className="page-container">
    <h1>Vincular Plataformas de Pago</h1>
    <form>
      <label>Plataforma:</label>
      <select>
        <option>PayPal</option>
        <option>Wise</option>
        <option>Skrill</option>
      </select>

      <label>Correo de la cuenta:</label>
      <input type="email" />

      <button type="submit">Vincular</button>
    </form>
  </div>
);

export default PaymentPlatforms;
