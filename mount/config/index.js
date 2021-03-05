const ARGS = {};

function load_args() {
  const fs = require('fs');
  fs.readFileSync('./config/.env').toString().split("\n").map(line => {
    let [key,val] = line.split('=');
    if (key && val) {
      ARGS[key.trim()] = val.trim();
    }
  });
}
load_args();

module.exports = {
  "db": `postgres://${ARGS.PG_USER}:${ARGS.PG_PASS}@supabase/${ARGS.PG_DB}`,
  "cache": 3600,
  "port": ARGS.DIRT_PORT,
  "host": "localhost",
  "swagger": {
    "basePath": null,
    "externalDocs": {
      "url": "https://github.com/tobinbradley/dirt-simple-postgis-http-api",
      "description": "Source code on Github"
    },
    "info": {
      "title": "Dirt Simple Postgres HTTP API",
      "description": "The Dirt-Simple PostGIS HTTP API is an easy way to expose geospatial functionality to your applications. It takes simple requests over HTTP and returns JSON, JSONP, or protobuf (Mapbox Vector Tile) to the requester. Although the focus of the project has generally been on exposing PostGIS functionality to web apps, you can use the framework to make an API to any database.",
      "version": "3"
    },
    "schemes": ["http", "https"],
    "tags": [
      {
        "name": "api",
        "description": "code related end-points"
      },
      {
        "name": "feature",
        "description": "features in common formats for direct mapping."
      },
      {
        "name": "meta",
        "description": "metadata for tables and views."
      }
    ]
  }
}
