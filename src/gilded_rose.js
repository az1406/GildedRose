function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

function update_quality() {
  items.forEach(item => {
    if (item.name === 'Sulfuras, Hand of Ragnaros') return;

    item.sell_in -= 1;

    if (item.name === 'Aged Brie') {
      if (item.quality < 50) item.quality += 1;
      if (item.sell_in < 0 && item.quality < 50) item.quality += 1;

    } else if (item.name.includes('Backstage passes')) {
      if (item.quality < 50) {
        item.quality += 1;
        if (item.sell_in < 10 && item.quality < 50) item.quality += 1;
        if (item.sell_in < 5 && item.quality < 50) item.quality += 1;
      }
      if (item.sell_in < 0) item.quality = 0;
    } else {
      if (item.quality > 0) item.quality -= item.name.includes('Conjured') ? 2 : 1;
      if (item.sell_in < 0 && item.quality > 0) item.quality -= item.name.includes('Conjured') ? 2 : 1;
    }

    if (item.quality < 0) item.quality = 0;
    if (item.quality > 50) item.quality = 50;
  });
}