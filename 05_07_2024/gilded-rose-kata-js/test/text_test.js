const { updateItems } = require("../src/gilded_rose");

function createItem(name, sellIn, quality) {
  return { name, sellIn, quality };
}

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const items = [
  createItem("+5 Dexterity Vest", 10, 20),
  createItem("Aged Brie", 2, 0),
  createItem("Elixir of the Mongoose", 5, 7),
  createItem("Sulfuras, Hand of Ragnaros", 0, 80),
  createItem("Sulfuras, Hand of Ragnaros", -1, 80),
  createItem("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  createItem("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  createItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
];

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

const days = Number(process.argv[2]) || 2;

console.log("OMGHAI!");
for (let day = 0; day < days + 1; day++) {
  console.log(`-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach((item) =>
    console.log(`${item.name}, ${item.sellIn}, ${item.quality}`)
  );
  updateItems(items);
  console.log("");
}
