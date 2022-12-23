**_TOUR_** query will return a single tour with selected field(s)

<br/>

##### _Query Structure:_

---

```
tour(tourid: ID!): Tour
```

<br/>

##### _Argument(s):_

---

This query must be made with a **_Tour ID_** as argument:

1. Tour Id

   <span style="color:darkorange">tourid</span> : <span style="color:magenta">_ID_</span> - <span style="color:darkorange"> the unique identifier of a tour </span> (compulsory)

<br/>

##### _Response:_

---

An object containing details of a single task

---

> This query will return all the fields of a TOUR, as described in the types section. However, you can return whatever field(s) you choose.

<br/>

##### _Query Template:_

```
query tour($tourid: ID!){
    tour(tourid:$tourid){
        vehicle
        distance
        status
        id
    }
}

//Variables
{ "tourid": "" }

```

---

##### _Example:_

```
query {
  tour(tourid: "14bb75b5-97bf-4143-8a21-ad512565aecb") {
    vehicle
    distance
    status
    id
  }
}

RESPONSE:
{
  "data": {
    "tour": {
      "vehicle": "car",
      "distance": 3854.4610000000002,
      "status": "finished",
      "id": "14bb75b5-97bf-4143-8a21-ad512565aecb"
    }
  }
}

```
