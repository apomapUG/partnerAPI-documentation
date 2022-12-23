**_LOCATION_** query will return a single location with selected field(s)

<br/>

##### _Query Structure:_

---

```
location(locationid: ID!): Location
```

<br/>

##### _Argument(s):_

---

This query must be made with a **_Location ID_** as argument:

1. Location Id

   <span style="color:darkorange">locationid</span> : <span style="color:magenta">_ID_</span> - <span style="color:darkorange"> the unique identifier of a Location </span> (compulsory)

<br/>

##### _Response:_

---

An object containing details of a single location (pharmacy)

---

> This query will return all the fields of a LOCATION, as described in the types section. However, you can return whatever field(s) you choose.

<br/>

##### _Query Template:_

```
query location($locationid: ID!){
    location(locationid:$locationid){
     name
     system
     type
     id
    }
}

//Variables
{ "locationid": " }

```

---

##### _Example:_

```
query {
  location (locationid: "0a839781-73a3-387e-25eb-54d82627042d") {
    name
    system
    type
    id
  }
}

RESPONSE:
{
  "data": {
    "location": {
      "name": "Jad Apotheke",
      "system": "cida_nova_plus",
      "type": "branch",
      "id": "0a839781-73a3-387e-25eb-54d82627042d"
    }
  }
}

```
