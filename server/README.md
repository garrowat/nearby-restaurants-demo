# Nearby Restaurants Carousel API

> A CRUD API for the Nearby Restaurants Carousel

## Table of Contents

1. [Usage](#Usage)
   - [Requests](#Requests)
   - [Responses](#Responses)

## Usage

Below are the requests and responses for this API.

### Requests
Request | URL | Method | Returns | Inputs
--------- | ---------- | ---------- | ---------- | ----------
Find a carousel by ID | /api/nearby/:carousel_id | GET | [carousel_json](#carousel_json) | [carousel_id]
Add a new carousel via JSON | /api/nearby/ | POST | [carousel_json](#carousel_json) | [carousel_json](#carousel_json)
Incremember the favorite count for a restaurant | /api/nearby/:carousel_id | PUT | [carousel_json](#carousel_json) | [carousel_id], [restaurantId], [increment]
Update any fields for an existing carousel | /api/nearbyUpdate/:carousel_id | PUT | [carousel_json](#carousel_json) | [carousel_json](#carousel_json)
Delete an existing carousel by ID | /api/nearby/:carousel_id | DELETE | [carousel_json](#carousel_json) (deleted item) | [carousel_id]

### Responses

Response payloads are the following:

#### carousel_json
```json
{
  "id":1,
  "carousel":[
    {
        "restaurantId":1,
        "name":"Lonesome Dove Grill",
        "category":"burgers",
        "deliveryEst":15,
        "favorited":27,
        "image":"https://restaurantmediafec.s3.us-east-2.amazonaws.com/restaurant+images/fancy+burger.jpg"
    },
    {
        "restaurantId":2,
        "name":"Bobby’s Grill",
        "category":"burgers",
        "deliveryEst":30,
        "favorited":61,
        "image":"https://restaurantmediafec.s3.us-east-2.amazonaws.com/restaurant+images/burger+prince.png"
    },
    {
        "restaurantId":3,
        "name":"Melting Pot Grill",
        "category":"burgers",
        "deliveryEst":20,
        "favorited":226,
        "image":"https://restaurantmediafec.s3.us-east-2.amazonaws.com/restaurant+images/fnmag-gross-veggie-burger.0.jpg"
    },
  ]
}
```
