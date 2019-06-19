# Automatic Infrastructure

Automatic Infrastructure refers to how the infrastructure is deployed, operated and maintained.

The service should strive for making all parts of the infrastructure lifecycle automated.

For example, commits changing the infrastructure should be automatically applied once merged to master.

PRs should enable contributors to have a automatic preview of their changes, if possible.

The infrastructure should be resilient enough to automatically recover in case of faulty commits, and do a automatic rollback if errors are detected.

Needed features:

- Blue-Green Deployments
  - Built-In Healthchecks
- Public history of all actions
- Allows experimentation before final deploy
  - Or rather, using production data for new version
  - Divide apps in two steps:
    - production / master
    - master is always `master` branch
    - production is always `production` branch
    - if production is on different version than master, production should duplicate
      traffic to master
    - Duplications should also happen with dependencies if needed
- Can be triggered from CI easily













Where to build the abstraction over docker-compose configuration files?

Another theme is the executor, who runs the actual deploys. It also have to be
aware of the state of a deployment.

Instead of having rollbacks, we should just have forward going state.

Removing completely user access? Difficult. Without any access, it's hard to 
regain control of something going out of control. But with access, opens up
a whole for someone else to gain access too. Ideally should be without user access
but it's hard to let go of control.

Misc: benchmark for service inclusion: would we be able to run this if the entity
behind the project run out of money? SaaS without full open source/free software
is a no-go

There is a fight, or rather, you need to balance the ease of using others services
vs the ability to self-host and future pain.

Open-Services operates on the idea that for-profit entities will eventually
either become something different than what they were in the beginning as they
expand or run out of cash to continue operating because they accept loss in
the beginning.

Open-Services tries to solve this by bootstrapping on crowdfunding in a transparent
way.

## How-To

Prerequisites:

- Server to do deploys from
  - New Open-Service?
- Server(s) to do deploys to

Need to have a tool that can fulfill the following:

- On new code-changes to specific branch, deploy those changes

Currently, that would mean:

- Clone project if needed
- Checkout the commit we want to deploy
- run `docker-compose -f open-registry/docker-compose -f open-registry/infra/docker-compose-prod build/pull app`
- then run `docker-compose -f ... restart app`

We can use https://github.com/mozilla/sops for secrets

- Instead, clone project if needed
- Checkout the latest commit and get which branch we're on
- Load `infra/`
     - `docker-compose.yml`
     - `docker-compose-env-$branch.yml`
- Run `docker-compose -f docker-compose.yml -f docker-compose-env-$branch.yml`

We need to have something running outside docker-compose

Also, dev has to be a separate one than the two ones running in production.

Figure out the difference between what's running and what's new

Different states:
- Production and master the same => just run production
- Production different than master => run both, duplicate traffic to master

State along the way?

- Compare master..current
- If different, 
