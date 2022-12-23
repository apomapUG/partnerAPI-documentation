**_LOCATIONS_** query will return a collection of locations (i.e. multiple locations)

<br/>

##### _Query Structure:_

---

```
locations: [Location]
```

<br/>

##### _Argument(s):_

---

None

<br/>

##### _Response:_

---

An array (collection) of locations.

---

> This query will return all the fields of a LOCATION, as described in the types section. However, you can return whatever field(s) you choose.

<br/>

##### _Query Template:_

```
query locations{
    locations{
     name
     address
    }
}

```

---

##### _Example:_

```
query {
  locations {
    name
    address
  }
}

RESPONSE:
{
  "data": {
    "locations": [
      {
        "name": "Jad Apotheke",
        "address": "Hermannstraße 223, 33813 Oerlinghausen, Deutschland, "
      },
      {
        "name": "Waldstrasse Apotheke",
        "address": "Waldstraße 113, 33813 Oerlinghausen, Deutschland, "
      }
    ]
  }
}

```
