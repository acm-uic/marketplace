/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yyqtjf20nw7vje3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "knjgzqhu",
    "name": "confirmed",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yyqtjf20nw7vje3")

  // remove
  collection.schema.removeField("knjgzqhu")

  return dao.saveCollection(collection)
})
