/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("74riiebulb43zi2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "av6bg50h",
    "name": "category",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("74riiebulb43zi2")

  // remove
  collection.schema.removeField("av6bg50h")

  return dao.saveCollection(collection)
})
