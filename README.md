# Nearby Restaurants Image Carousel, a Back-end Demo

  This project takes a legacy codebase (Nearby Restaurants Carousel), and redesigns the backend to handle 10 million restaurant records and 2000 requests per second.

  I chose to use Elasticsearch for this after reading about its solid geospatial capabilities, and also for the added benefit of visualization via Kibana.

  The backend was created in a **Windows Subsystem for Linux environment (Ubuntu 18.04)**, so if you find yourself in the same boat and struggling, I may have some interesting notes for you! Feel free to reach out :smile:

## Looking for the API?

  For API documentation, see the [API Readme](/server/README.md).

## Table of Contents

  0. [Technologies](#Technologies)
  1. [Features](#Features)
  2. [Requirements](#Requirements)
  3. [Installation](#Installation)
  4. [Usage](#Usage)
  5. [Testing](#Testing)

## Technologies

  - [React.js](https://reactjs.org/)
  - [Styled Components](https://www.styled-components.com/)
  - [Babel](https://babeljs.io/)
  - [Webpack](https://webpack.js.org/)
  - [Express.js](https://expressjs.com/)
  - [Elasticsearch](https://www.elastic.co/)

## Features

  - **React** frontend fetches from an **Express** server that queries an **Elasticsearch** index of restaurants that each contain a location field for **geolocation** purposes
  - Frontend created by [o0Maikeru0o](https://github.com/o0Maikeru0o), with some modifications
  - Handles 2000 requests per second locally
  - Support for Elasticsearch geo-distance queries, like so:

  ```json
  GET 127.0.0.1:9200/restaurants/_search/
  {
    "query": {
        "bool" : {
            "must" : {
                "match_all" : {}
            },
            "filter" : {
                "geo_distance" : {
                    "distance" : "200km",
                    "location" : {
                        "lat" : 40,
                        "lon" : -70
                    }
                }
            }
        }
    }
}
```

## Requirements

- Node.js 8.15+
- Elasticsearch 7.3+

## Installation

  From within the root directory:

  ```sh
  npm install
  ```

## Setup

  Ensure that your Elasticsearch server is running (Optionally, you can install Elastic's Kibana for some sleek visualization and management capabilities).

  You can confirm this by navigating to `127.0.0.1:9200`, after which you'll see the following in your browser:

  ```json
  {
  "name" : "DESKTOP-U687PP6",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "GQZTybA8SSW15IP_M42Wmg",
  "version" : {
    "number" : "7.3.0",
    "build_flavor" : "default",
    "build_type" : "tar",
    "build_hash" : "de777fa",
    "build_date" : "2019-07-24T18:30:11.767338Z",
    "build_snapshot" : false,
    "lucene_version" : "8.1.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
  ```

  Or by running:
  ```sh
  npm run info
  ```

## Usage

  From within the root directory:
  ```sh
  npm run build
  npm run seed:db
  npm run start
  ```

## Testing

  ```sh
  npm run test
  ```

