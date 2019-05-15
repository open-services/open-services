# Secrets

Most, if not all, infrastructure projects have secrets that should be protected from the public view, as to not compromise the service.

Secrets include things like:

- API credentials (API tokens for GitHub API for example)
- Admin credentials
- User API tokens

Extra caution has to be employed to make sure details such as these are not public.

## Management of secrets

Secrets are currently managed via a 1Password vault that is shared among the leadership team.

Everyone in the leadership team should have access to these, as to ensure access is not lost if someone leaves.
