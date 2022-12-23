A task is a customer order or a single activity.
<br/>
<br/>

| Field Name           |                                                  Description                                                  |                       Type |
| :------------------- | :-----------------------------------------------------------------------------------------------------------: | -------------------------: |
| task_id              |                    a unique identifier for a task. This is generated internally by apomap                     |                     String |
| task_job_no          |                                the id created when a POS Scanner is initiated                                 |                     String |
| task_type            |                         the type of a task. It can either be a "Pickup" or "Delivery"                         |                     String |
| task_date            |                                          the delivery date of a task                                          |                     String |
| task_note            |                                 any additional information concerning a task                                  |                     String |
| task_open_amount     |                       the amount of money left to be paid by a customer for a delivery                        |                      Float |
| task_origin          |                                the pharmacy from which the task was initiated                                 |                     String |
| task_owner           |                                   a unique id to identify a pharmacy owner                                    |                     String |
| task_status          |     the status of a task can either be assigned, unassigned, prepared, ontheway, successfull or declined      |                     String |
| task_planed_delivery |                           the planned delivery date of a task with type "Delivery"                            |                     String |
| task_planed_pickup   |                             the planned pickup date of a task with type "Pickup"                              |                     String |
| task_tags            | an array of extra information that could be attached to a task for further description or for filtering tasks | Array of strings: [String] |
