**_TOURS_** query will return a collection of tours (i.e. multiple tours)

<br/>

##### _Query Structure:_

---

```
tours(driverid: ID): [Tour]
```

<br/>

##### _Argument(s):_

---

This query can be made with or without a driver's id as an argument:

1. Driver Id

   <span style="color:darkorange">driverid</span> : <span style="color:magenta">_ID_</span> - <span style="color:darkorange"> tthe unique identifier of a driver </span> (optional)

<br/>

##### _Response:_

---

An array (collection) of tours

---

> This query will return all the fields of a TOUR, as described in the types section. However, you can return whatever field(s) you choose.

<br/>

##### _Query Template:_

```
query tours($driverid: ID){
    tours(driverid:$driverid){
     vehicle
     startTime
     actualEndTime
     distance
     status
    }
}

//Variables

{
  "driverid": ""
}

```

---

##### _Examples:_

- A query without any argument

```
query {
  tours {
    vehicle
    startTime
    actualEndTime
    distance
    status
  }
}


RESPONSE:
{
  "data": {
    "tours": [
      {
        "vehicle": "car",
        "startTime": "17:37",
        "actualEndTime": "16:23",
        "distance": 3854.4610000000002,
        "status": "finished"
      }
    ]
  }
}

```

- A query with "Driver Id" as an argument

```
query {
  tours (driverid: "8908019a-0eeb-eefa-d0ca-f4c94074c70a") {
    vehicle
    startTime
    actualEndTime
    distance
    status
    driver
  }
}


RESPONSE:
{
  "data": {
    "tours": [
      {
        "vehicle": "car",
        "startTime": "17:37",
        "actualEndTime": "16:23",
        "distance": 3854.4610000000002,
        "status": "finished",
        "driver": "8908019a-0eeb-eefa-d0ca-f4c94074c70a"
      }
    ]
  }
}

```
