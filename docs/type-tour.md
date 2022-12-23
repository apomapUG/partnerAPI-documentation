A tour is a single trip of deliveries. It includes multiple tasks.
<br/>
<br/>

| Field Name      | Description                                                             | Type    |
| --------------- | ----------------------------------------------------------------------- | ------- |
| vehicle         | the type of vehicle used for a tour. It can either be Car, Bike or Foot | String  |
| status          | the status of a tour (e.g ongoing, finished)                            | String  |
| startTime       | the time at which a tour starts                                         | String  |
| actualEndTime   | the time at which a tour ends                                           | String  |
| owner           | a unique id to identify a pharmacy owner                                | String  |
| driver          | a unique id to identify a driver who was responsible for a tour         | String  |
| date            | the date a tour was initiated                                           | String  |
| distance        | the total distance (in metres) taken to complete a single tour          | Float   |
| id              | a unique id to identify a single tour                                   | String  |
| completion_time | the total time (in seconds) taken to complete a tour                    | Integer |
