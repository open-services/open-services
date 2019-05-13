# Automatic Expensing

A Open Service should be setup to continue running for as long as possible without human intervention.

When any intervention is needed, the selected treasurer is the one who is responsible for performing the necessary actions.

The treasurer is also responsible for making sure work is being done for achieving automatic expensing.

How exactly the automatic expensing is setup, may differ from project to project, but here is an example on how it can work when it comes to server hosting with Hetzner and funding via OpenCollective:

- Treasurer have setup a payment account for doing transfers (PayPal?)
- OpenCollective have invoicing API (they don't, yet)
- Expensing application creates a invoice in OpenCollective every time Hetzner bills (each month)
