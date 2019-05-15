# Automatic Infrastructure

Automatic Infrastructure refers to how the infrastructure is deployed, operated and maintained.

The service should strive for making all parts of the infrastructure lifecycle automated.

For example, commits changing the infrastructure should be automatically applied once merged to master.

PRs should enable contributors to have a automatic preview of their changes, if possible.

The infrastructure should be resilient enough to automatically recover in case of faulty commits, and do a automatic rollback if errors are detected.
