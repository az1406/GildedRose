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
});
