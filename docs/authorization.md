### Authorization

---

The apomap partner API uses the API Key authorization type. It accepts a key-value pair argument which is added to the HTTP Header. The authorization header will be automatically attached to every request.

The key must always be **_"authorization"_**, and its value is a token of type **_String_**. This token is unique and different for each location (pharmacy) and has this structure:

```
"authorization" : "apomap.6f98452ac54214c985015c75"
```

A **TOKEN** has either **_"read"_** or **_"write"_** permissions. A token with **_"read"_** permission will only be able to access or get information from the apomap partner API. In contrast, a token with **_"write"_** permission will only be able to change or mutate data via the API. However, a token with both **_"read"_** and **_"write"_** permissions will be able to access and change or edit data or information from the API.

You can choose to assign one or all permissions to a single **TOKEN**. You can also decide what you can use a token for, either for one query or all queries, one mutation or all mutations or all queries and mutations.

<br/>
<br/>

##### How to create permission(s) for a token

---

Obtaining or creating a token (with permissions) for a location can quickly be done from the user's dashboard by following the following steps:

1. Go to the settings
2. Click on **"Schnittstellen"**
3. Create a token by clicking on the **"Neuen Token erstellen"**
4. Fill in all necessary details like - **"Merkname"**, **"Prefix"**, etc
5. Click on the **"Berechtigungen wählen"** button and select the appropriate permission for the token
6. Select the location (pharmacy) by clicking on the **"Standort wählen"** button
7. Finally, click on the **"Erstellen"** button
