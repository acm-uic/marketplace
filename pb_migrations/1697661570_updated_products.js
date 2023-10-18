/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("74riiebulb43zi2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8xr8xyux",
    "name": "preOrder",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("74riiebulb43zi2")

  // remove
  collection.schema.removeField("8xr8xyux")

  return dao.saveCollection(collection)
})
