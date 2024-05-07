//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const BAKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
const BRIE = "Aged Brie";
const SULFURA = "Sulfuras, Hand of Ragnaros";

function updateItems(items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].name != BRIE && items[i].name != BAKSTAGE) {
      if (items[i].quality > 0) {
        if (items[i].name != SULFURA) {
          items[i].quality = items[i].quality - 1;
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1;
        if (items[i].name == BAKSTAGE) {
          if (items[i].sellIn < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
          if (items[i].sellIn < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
        }
      }
    }
    if (items[i].name != SULFURA) {
      items[i].sellIn = items[i].sellIn - 1;
    }
    if (items[i].sellIn < 0) {
      if (items[i].name != BRIE) {
        if (items[i].name != BAKSTAGE) {
          if (items[i].quality > 0) {
            if (items[i].name != SULFURA) {
              items[i].quality = items[i].quality - 1;
            }
          }
        } else {
          items[i].quality = 0;
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1;
        }
      }
    }
  }

  return items;
}

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

module.exports = {
  updateItems,
};
