**_DRIVERS_** query will return a collection of drivers (i.e. multiple drivers)

<br/>

##### _Query Structure:_

---

```
drivers: [Driver]
```

<br/>

##### _Argument(s):_

---

None

<br/>

##### _Response:_

---

An array (collection) of drivers

---

> This query will return all the fields of a DRIVER, as described in the types section. However, you can return whatever field(s) you choose.

<br/>

##### _Query Template:_

```
query drivers{
  drivers {
    firstName
    lastName
  }
}

```

---

##### _Example:_

```
query {
  drivers {
    firstName
    lastName
  }
}

RESPONSE:
{
  "data": {
    "drivers": [
      {
        "firstName": "Max",
        "lastName": "Munstermann",
      }
    ]
  }
}

```
