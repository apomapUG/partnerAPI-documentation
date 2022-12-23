**_TASK_** query will return a single task with selected field(s)

<br/>

##### _Query Structure:_

---

```
task(id: ID!): Task
```

<br/>

##### _Argument(s):_

---

This query must be made with a **_Task ID_** as argument:

1. Task Id

   <span style="color:darkorange">id</span> : <span style="color:magenta">_ID_</span> - <span style="color:darkorange"> the unique identifier of a task </span> (compulsory)

<br/>

##### _Response:_

---

An object containing details of a single task

---

> This query will return all the fields of a TASK, as described in the types section. However, you can return whatever field(s) you choose.

<br/>

##### _Query Template:_

```
query task($id: ID!){
    task(id:$id){
        task_id
        task_status
    }
}

//Variables
{ "id": "" }

```

---

##### _Example:_

```
query {
  task (id: "9c2ec735-e4c6-1b10-0636-9738aba762cf") {
    task_id
    task_status
    task_type
  }
}

RESPONSE:
{
  "data": {
    "task": {
      "task_id": "9c2ec735-e4c6-1b10-0636-9738aba762cf",
      "task_status": "unassigned",
      "task_type": "delivery"
    }
  }
}

```
