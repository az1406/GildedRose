describe("Gilded Rose", function() {

  it("should degrade quality of item twice as fast, after sellIn date passed", function() {
    items = [ new Item("Elixir of the Mongoose", 0, 10 ) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(8);
   
  });

  it("should not decrease quality below 0", function() {
    items = [ new Item("Elixir of the Mongoose", 1, 0) ];
   update_quality();
   expect(items[0].quality).toEqual(0);
   expect(items[0].sell_in).toEqual(0);
 });

  it("should increase quality for Aged Brie", function() {
  items = [ new Item("Aged Brie", 10, 20) ];
  update_quality();
  expect(items[0].sell_in).toEqual(9);
  expect(items[0].quality).toEqual(21);
 });


 it("should not increase quality above 50", function() {
  items = [ new Item("Aged Brie", 10, 50) ];
  update_quality();
  expect(items[0].sell_in).toEqual(9);
  expect(items[0].quality).toEqual(50);
  

});

it("should not change quality or sell_in for Sulfuras", function() {
  items = [ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ];
  update_quality();
  expect(items[0].sell_in).toEqual(10);
  expect(items[0].quality).toEqual(80);
  
});

it("should increase quality by 2 when sell_in is 10 days or less for Backstage passes", function() {
  items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ];
  update_quality();
  expect(items[0].sell_in).toEqual(9);
  expect(items[0].quality).toEqual(22);
  
});



});
