const StockMarket = () => (
  <div className="page-container">
    <h1>Análisis de Bolsa de Valores</h1>
    <form>
      <label>Buscar símbolo bursátil (ej. AAPL, TSLA):</label>
      <input type="text" placeholder="Ej: AMZN" />

      <label>Rango de fechas:</label>
      <input type="date" /> a <input type="date" />

      <button type="submit">Analizar</button>
    </form>
  </div>
);

export default StockMarket;
