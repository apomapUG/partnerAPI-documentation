**_DRIVER_** query will return a single driver with selected field(s)

<br/>

##### _Query Structure:_

---

```
driver(driverid: ID!): Driver
```

<br/>

##### _Argument(s):_

---

This query must be made with a **_Driver ID_** as argument:

1. Driver Id

   <span style="color:darkorange">driverid</span> : <span style="color:magenta">_ID_</span> - <span style="color:darkorange"> the unique identifier of a Driver </span> (compulsory)

<br/>

##### _Response:_

---

An object containing details of a single driver

---

> This query will return all the fields of a DRIVER, as described in the types section. However, you can return whatever field(s) you choose.

<br/>

##### _Query Template:_

```
query driver($driverid: ID!){
    driver(driverid:$driverid){
     firstName
     lastName
     id
    }
}

//Variables
{ "driverid": "" }

```

---

##### _Example:_

```
query {
  driver (driverid: "8908019a-0eeb-eefa-d0ca-f4c94074c70a") {
    firstName
    lastName
    id
  }
}

RESPONSE:
{
  "data": {
    "driver": {
      "firstName": "Max",
      "lastName": "Munstermann",
      "id": "8908019a-0eeb-eefa-d0ca-f4c94074c70a"
    }
  }
}

```
