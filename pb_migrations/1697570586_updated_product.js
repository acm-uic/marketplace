/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("74riiebulb43zi2")

  collection.name = "products"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("74riiebulb43zi2")

  collection.name = "product"

  return dao.saveCollection(collection)
})
