// $eq  $gt  $gte  $in  $lt  $lte  $ne   $nin  $exists  $type

// Inventory collection
[
   { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: ["A", "B", "C"] },
   { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: ["B"] },
   { _id: 3, item: { name: "mn", code: "456" }, qty: 25, tags: ["A", "B"] },
   { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: ["B", "A"] },
   { _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [["A", "B"], "C"] }
]

// const result = await Inventory.find({ qty: { $eq: 20 } })
// const result = await Inventory.find({ "item.name": { $eq: "mn" } })
// const reslut = await Inventory.find({ tags: { $eq: "B"} })
// const reslut = await Invenotry.find({ tags: { $eq: ["A", "B"] } })


// another Inventory collection
[
   {
      item: "nuts", quantity: 30,
      carrier: { name: "Shipit", fee: 3 }
   },
   {
      item: "bolts", quantity: 50,
      carrier: { name: "Shipit", fee: 4 }
   },
   {
      item: "washers", quantity: 10,
      carrier: { name: "Shipit", fee: 1 }
   }
]

// const result = await Inventory.find({ quantity: { $gt: 20 } })
// const result = await Inventory.updateOne({ "carrier.fee": { $gt: 2 } }, { $set: { "price": 9.99 } })
// const result = await Invetory.find({ quantity: { $gte: 20 } })
// const result = await Inventory.find({ quantity: { $in: [50, 10] } })
// const result = await Inventory.find({ quantity: { $lt: 20 } })
// const result = await Inventory.find({ "carrier.fee": { $lte: 4 } })
// const result = await Inventory.find({ quantity: { $ne: 10 } })
// const result = await Inventory.find({ "carrier.fee": { $ne: 3 } })
// const result = await Inventory.find({ quantity: { $nin: [50, 10] } })