# Mutate Tour

This query allows users to decide what field of a TOUR object they want to change. However, you can change only one field at a time.

<br/>

##### _Query Structure:_

---

```
updateTour(
    tourid: ID!
    key: String!
    value: String!
): Tour
```

<br/>

##### _Argument(s):_

---

This query must be made with the following arguments:

1. Tour Id

   <span style="color:darkorange">tourid</span> : <span style="color:magenta">_ID_</span> - <span style="color:darkorange"> the unique identifier of a tour </span> (compulsory)

2. Key

   <span style="color:darkorange">id</span> : <span style="color:magenta">_String_</span> - <span style="color:darkorange"> the field name of a tour object </span> (compulsory)

3. Value

   <span style="color:darkorange">id</span> : <span style="color:magenta">_String | Float | Int_</span> - <span style="color:darkorange"> the new value of a field (compulsory). It can either be a string, integer or float </span> (compulsory)

<br/>

> The key of a mutation query must be in accordance with the Type Definitions and Schema of a TOUR as described in the section above.

---

<br/>

##### _Response:_

---

A tour with new (updated) details. The response type is an _Object_

---

<br/>

##### _Example:_

- Changing the vehicle type of a tour

```
FORMER DATA:
{
  "data": {
    "tour": {
      "vehicle": "car",
      "status": "finished",
      "distance": 3854.4610000000002,
      "id": "14bb75b5-97bf-4143-8a21-ad512565aecb"
    }
  }
}
```

In this example, the vehicle of a tour will be changed from **_"car"_** to **_"bike"_**. Therefore, the **_"key"_** of the mutation will be **_"vehicle"_** and the **_"value"_** will be **_"bike"_**.

```
WRITING THE MUTATION:

mutation {
  updateTour(
    tourid: "14bb75b5-97bf-4143-8a21-ad512565aecb"
    key: "vehicle"
    value: "bike"
  ) {
    vehicle
    status
    distance
    id
  }
}

RESPONSE (with new data)
{
  "data": {
    "updateTour": {
      "vehicle": "bike",
      "status": "finished",
      "distance": 3854.4610000000002,
      "id": "14bb75b5-97bf-4143-8a21-ad512565aecb"
    }
  }
}

```
