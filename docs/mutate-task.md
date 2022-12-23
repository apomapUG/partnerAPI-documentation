# Mutate Tour

This query allows users to decide what field of a TASK object they want to change. However, you can change only one field at a time.

<br/>

##### _Query Structure:_

---

```
updateTask(
    taskid: ID!
    key: String!
    value: String!
): Task
```

<br/>

##### _Argument(s):_

---

This query must be made with the following arguments:

1. Task Id

   <span style="color:darkorange">taskid</span> : <span style="color:magenta">_ID_</span> - <span style="color:darkorange"> the unique identifier of a task </span> (compulsory)

2. Key

   <span style="color:darkorange">id</span> : <span style="color:magenta">_String_</span> - <span style="color:darkorange"> the field name of a task object </span> (compulsory)

3. Value

   <span style="color:darkorange">id</span> : <span style="color:magenta">_String | Float | Int_</span> - <span style="color:darkorange"> the new value of a field (compulsory). It can either be a string, integer or float </span> (compulsory)

<br/>

> The key of a mutation query must be in accordance with the Type Definitions and Schema of a TASK as described in the section above.

---

<br/>

##### _Response:_

---

A task with new (updated) details. The response type is an _Object_

---

<br/>

##### _Example:_

- Changing the status of a task

```
FORMER DATA:
{
  "data": {
    "task": {
      "task_type": "delivery",
      "task_status": "unassigned",
      "task_id": "100ef5ea-19bf-e4b5-3609-4ee8ab999d11"
    }
  }
}
```

In this example, the status of a task will be changed from **_"unassigned"_** to **_"assigned"_**. Therefore, the **_"key"_** of the mutation will be **_"task_status"_** and the **_"value"_** will be **_"assigned"_**.

```
WRITING THE MUTATION:

mutation {
  updateTask(
    taskid: "100ef5ea-19bf-e4b5-3609-4ee8ab999d11"
    key: "task_status"
    value: "assigned"
  ) {
    task_type
    task_status
    task_id
  }
}

RESPONSE (with new data)
{
  "data": {
    "updateTask": {
      "task_type": "delivery",
      "task_status": "assigned",
      "task_id": "100ef5ea-19bf-e4b5-3609-4ee8ab999d11"
    }
  }
}

```
