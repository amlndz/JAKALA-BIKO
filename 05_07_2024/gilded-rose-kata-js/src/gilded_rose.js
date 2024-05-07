//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

const BAKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
const BRIE = "Aged Brie";
const SULFURA = "Sulfuras, Hand of Ragnaros";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

function isBrie(item) {
  return item.name === BRIE;
}

function isBackstage(item) {
  return item.name === BAKSTAGE;
}

function isSulfura(item) {
  return item.name === SULFURA;
}

function decreaseSellIn(item) {
  if (isSulfura(item)) {
    return;
  }
  item.sellIn = item.sellIn - 1;
}

function changeQualityAfterSellIn(item) {
  if (isSulfura(item)) {
    return;
  }

  if (item.sellIn >= 0) {
    return;
  }

  if (isBrie(item)) {
    if (item.quality < MAX_QUALITY) {
      item.quality = item.quality + 1;
    }
    return;
  }

  if (isBackstage(item)) {
    item.quality = 0;
    return;
  }

  if (item.quality > MIN_QUALITY) {
    item.quality = item.quality - 1;
  }
}

function changeQualityBackStage(item) {
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

function changeQuality(item) {
  if (!isBrie(item) && !isBackstage(item)) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        changeQualityBackStage(item);
      }
    }
  }
}

function updateItems(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    changeQuality(item);
    decreaseSellIn(item);

    changeQualityAfterSellIn(item);
  }

  return items;
}

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//

module.exports = {
  updateItems,
};
