//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const BAKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
const BRIE = "Aged Brie";
const SULFURA = "Sulfuras, Hand of Ragnaros";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

function isBrie(item) {
  return item.nombre === BRIE;
}

function isBackstage(item) {
  return item.nombre === BAKSTAGE;
}

function isSulfura(item) {
  return item.nombre === SULFURA;
}

function increaseQuality(item) {
  item.quality = item.quality + 1;
  if (item.name == BAKSTAGE) {
    if (item.sellIn < 11) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
    if (item.sellIn < 6) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }
}

function updateItems(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (!isBrie(item) && !isBackstage(item)) {
      if (item.quality > 0) {
        if (item.name != SULFURA) {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < MAX_QUALITY) {
        increaseQuality(item);
      }
    }
    if (!isSulfura(item)) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != BRIE) {
        if (item.name != BAKSTAGE) {
          if (item.quality > 0) {
            if (item.name != SULFURA) {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = 0;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
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
