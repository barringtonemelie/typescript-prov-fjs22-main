// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.

type DailyStock = {
  day: string;
  price: number; 
}

type StockMeasurementsType = Array<DailyStock>;

const getRisingStockDays = (stockMeasurements: StockMeasurementsType): StockMeasurementsType =>
  stockMeasurements.filter((data: DailyStock) => data.price > 100);

const stockMeasurements: StockMeasurementsType = [
  {
    day: "Monday",
    price: 105,
  },
  {
    day: "Tuesday",
    price: 98,
  },
  {
    day: "Wednesday",
    price: 110,
  },
];

const profitableDays: StockMeasurementsType = getRisingStockDays(stockMeasurements);
console.log(profitableDays);
