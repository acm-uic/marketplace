/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "74riiebulb43zi2",
    "created": "2023-10-17 15:52:30.087Z",
    "updated": "2023-10-17 15:52:30.087Z",
    "name": "product",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a3gra6lw",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cgshhkje",
        "name": "price",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "26rk4w9a",
        "name": "img",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("74riiebulb43zi2");

  return dao.deleteCollection(collection);
})
