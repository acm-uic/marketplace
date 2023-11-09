/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yyqtjf20nw7vje3")

  // remove
  collection.schema.removeField("2glpi9sa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyf0uten",
    "name": "products",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yyqtjf20nw7vje3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2glpi9sa",
    "name": "productId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "74riiebulb43zi2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("pyf0uten")

  return dao.saveCollection(collection)
})
