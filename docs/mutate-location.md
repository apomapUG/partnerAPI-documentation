# Mutate Location

This query allows users to decide what field of a LOCATION object they want to change. However, you can change only one field at a time.

<br/>

##### _Query Structure:_

---

```
updateLocation(
    locationid: ID!
    key: String!
    value: String!
): Location
```

<br/>

##### _Argument(s):_

---

This query must be made with the following arguments:

1. Location Id

   <span style="color:darkorange">locationid</span> : <span style="color:magenta">_ID_</span> - <span style="color:darkorange"> the unique identifier of a location </span> (compulsory)

2. Key

   <span style="color:darkorange">id</span> : <span style="color:magenta">_String_</span> - <span style="color:darkorange"> the field name of a location object </span> (compulsory)

3. Value

   <span style="color:darkorange">id</span> : <span style="color:magenta">_String | Float | Int_</span> - <span style="color:darkorange"> the new value of a field (compulsory). It can either be a string, integer or float </span> (compulsory)

<br/>

> The key of a mutation query must be in accordance with the Type Definitions and Schema of a LOCATION as described in the section above.

---

<br/>

##### _Response:_

---

A location with new (updated) details. The response type is an _Object_

---

<br/>

##### _Example:_

- Changing the address of a location

```
FORMER DATA:
{
  "data": {
    "location": {
      "name": "Jad Apotheke",
      "address": "Hermannstraße 22, 33813 Oerlinghausen, Deutschland",
      "system": "cida_nova_plus",
      "type": "branch",
      "id": "0a839781-73a3-387e-25eb-54d82627042d"
    }
  }
}
```

In this example, the address of a location will be changed from **_"Hermannstraße 22, 33813 Oerlinghausen, Deutschland"_** to **_"Flutterstraße 23, 32791 Lage, Deutschland"_**. Therefore, the **_"key"_** of the mutation will be **_"address"_** and the **_"value"_** will be **_"Flutterstraße 23, 32791 Lage, Deutschland"_**.

```
WRITING THE MUTATION:

mutation {
  updateLocation(
    locationid: "0a839781-73a3-387e-25eb-54d82627042d"
    key: "address"
    value: "Flutterstraße 23, 32791 Lage, Deutschland"
  ) {
    name
    address
    system
    type
    id
  }
}

RESPONSE (with new data)
{
  "data": {
    "updateLocation": {
      "name": "Jad Apotheke",
      "address": "Flutterstraße 23, 32791 Lage, Deutschland",
      "system": "cida_nova_plus",
      "type": "branch",
      "id": "0a839781-73a3-387e-25eb-54d82627042d"
    }
  }
}

```
