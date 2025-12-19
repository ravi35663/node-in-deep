/*
==> Statement of CAP theorem:
    ->  Mainly CAP theorem applied in Distributed system.
    ->  The CAP theorem states that it is not possible to guarantee all three of the 
        desirable properties — consistency, availability, and partition tolerance at 
        the same time in a distributed system with data replication.
    ->  CAP:
        C:  Consistency:
            ->  In a distributed system, consistency means that all nodes or replicas 
                in the system have the same data at the same time.

        A:  Availability: 
            ->  In short availability ensures that the system is always available.
        P:  Partition Tolerance:
            ->  Network partitions can cause nodes to lose contact with one another, 
                making communication and synchronization difficult.

    ->  CAP theorem says that we cannot have all three properties i.e. C A P at same 
        time we can have at most two at once . So let’s understand this .
*/

/*
    All possible combinations of consistency , availability and partition tolerance are 
    1) CA (consistency + availability ):
    2) AP (availability + partition tolerance ):
    3) CP (consistency + partition tolerance ):
*/
/*
==> Why is the CAP theorem important:
    ->  The CAP theorem is important because it highlights trade-offs in distributed 
        systems. Developers must choose which two of consistency, availability, and 
        partition tolerance best fit their use case. For example, banking systems 
        prioritize consistency to avoid incorrect balances, while social media systems 
        prioritize availability so users can always access the app.
*/
/*
==> Real-World Examples:
    1)  Amazon DynamoDB: 
        Designed for high availability and partition tolerance by replicating data 
        across multiple AZs, but it may sacrifice strong consistency during network 
        partitions.

    2)  Google Spanner: 
        A CP system that provides strong consistency using synchronized clocks and 
        global distribution, at the cost of possible unavailability during network 
        partitions.
*/

/*
==> Rback, Pback and Aback:
    ->  Rback, Pback, Aback are commonly used shorthand terms in distributed systems 
        and CAP theorem discussions to describe how a system behaves when a failure 
        happens and later recovers.

    1) Rback (Rollback):
        ->  Means the system reverts to a previous consistent state after a failure.
        ->  Used when incorrect or partial updates must be undone.
        ->  Common in strongly consistent systems (e.g., databases with transactions).
        ->  Example: A failed money transfer is undone so balances remain correct.

    2) Pback (Partition-back / Partial-back)
        ->  Means the system recovers after a network partition, reconciling data 
            between nodes.
        ->  Conflicting updates may need resolution after the partition heals.
        ->  Common in AP systems.
        ->  Example: Updates made during a network split are merged later.

    3)  Aback (Availability-back)
        ->  Means the system restores availability first after downtime or failure.
        ->  Some data may be stale temporarily, but the service stays up.
        ->  Prioritizes uptime over immediate consistency.
        ->  Example: A social app stays online but shows slightly outdated data.
*/
    /*
    | Term  | Meaning                 | Focus              |
    | ----- | ----------------------- | ------------------ |
    | Rback | Rollback to safe state  | Consistency        |
    | Pback | Recover after partition | Partition handling |
    | Aback | Restore service quickly | Availability       |
*/