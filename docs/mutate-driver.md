# Mutate Driver

This query allows users to decide what field of a DRIVER object they want to change. However, you can change only one field at a time.

<br/>

##### _Query Structure:_

---

```
updateDriver(
    driverid: ID!
    key: String!
    value: String!
): Driver
```

<br/>

##### _Argument(s):_

---

This query must be made with the following arguments:

1. Driver Id

   <span style="color:darkorange">driverid</span> : <span style="color:magenta">_ID_</span> - <span style="color:darkorange"> the unique identifier of a driver </span> (compulsory)

2. Key

   <span style="color:darkorange">id</span> : <span style="color:magenta">_String_</span> - <span style="color:darkorange"> the field name of a driver object </span> (compulsory)

3. Value

   <span style="color:darkorange">id</span> : <span style="color:magenta">_String | Float | Int_</span> - <span style="color:darkorange"> the new value of a field (compulsory). It can either be a string, integer or float </span> (compulsory)

<br/>

> The key of a mutation query must be in accordance with the Type Definitions and Schema of a DRIVER as described in the section above.

---

<br/>

##### _Response:_

---

A driver with new (updated) details. The response type is an _Object_

---

<br/>

##### _Example:_

- Changing the last name of a driver

```
FORMER DATA:
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

In this example, the last name of a driver will be changed from **_"Munstermann"_** to **_"Falke"_**. Therefore, the **_"key"_** of the mutation will be **_"lastName"_** and the **_"value"_** will be **_"Falke"_**.

```
WRITING THE MUTATION:

mutation {
  updateDriver(
    driverid: "8908019a-0eeb-eefa-d0ca-f4c94074c70a"
    key: "lastName"
    value: "Falke"
  ) {
    firstName
    lastName
    id
  }
}

RESPONSE (with new data)
{
  "data": {
    "updateDriver": {
      "firstName": "Max",
      "lastName": "Falke",
      "id": "8908019a-0eeb-eefa-d0ca-f4c94074c70a"
    }
  }
}

```
