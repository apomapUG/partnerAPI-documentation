**_TASKS_** query will return a collection of tasks (i.e. multiple tasks)

<br/>

##### _Query Structure:_

---

```
tasks(ownerid: ID, status: String): [Task]
```

<br/>

##### _Argument(s):_

---

This query can be made with or without the following arguments:

1. Owner Id

   <span style="color:darkorange">ownerid</span> : <span style="color:magenta">_ID_</span> - <span style="color:darkorange"> the unique identifier of an apomap account owner </span> (optional)

2. Status

   <span style="color:darkorange">status</span> : <span style="color:magenta">String</span> - <span style="color:darkorange"> the status of a task </span> (optional)

<br/>

##### _Response:_

---

An array (collection) of tasks

---

> This query will return all the fields of a TASK, as described in the types section. However, you can return whatever field(s) you choose.

<br/>

##### _Query Template:_

```
query tasks($status: String){
    tasks(status:$status){
    task_type
    task_status
  }
}

//Variables

{"ownerid": ""} or {"status": ""}

```

---

##### _Examples:_

- A query without any argument

```
query {
  tasks {
    task_type
    task_status
  }
}

RESPONSE:
{
    "data": {
        "tasks": [
            {
                "task_type": "delivery",
                "task_status": "unassigned"
            },
            {
                "task_type": "delivery",
                "task_status": "unassigned"
            },
            {
                "task_type": "pickup",
                "task_status": "unassigned"
            },
            {
                "task_type": "delivery",
                "task_status": "unassigned"
            },
            {
                "task_type": "delivery",
                "task_status": "unassigned"
            },
            {
                "task_type": "delivery",
                "task_status": "declined"
            }
        ]
    }
}

```

- A query with "Owner Id" as an argument

```
query {
  tasks (ownerid: "dkTu3J6YTGW4gUqI2t0GnNrBLUz2") {
    task_type
  }
}

RESPONSE:
{
  "data": {
    "tasks": [
      {
        "task_type": "delivery"
      },
      {
        "task_type": "delivery"
      },
      {
        "task_type": "delivery"
      },
      {
        "task_type": "delivery"
      },
      {
        "task_type": "pickup"
      },
      {
        "task_type": "delivery"
      },
      {
        "task_type": "delivery"
      },
      {
        "task_type": "delivery"
      },
      {
        "task_type": "pickup"
      },
      {
        "task_type": "delivery"
      },
      {
        "task_type": "delivery"
      },
      {
        "task_type": "delivery"
      },
      {
        "task_type": "delivery"
      }
    ]
  }
}

```

- A query with "Status" as an argument

```
query {
  tasks (status: "declined") {
    task_status
    task_type
  }
}

RESPONSE:
{
  "data": {
    "tasks": [
      {
        "task_status": "declined",
        "task_type": "delivery"
      }
    ]
  }
}

```
