## Website-Deploy

What: A simple website deployment tool for making websites accessible to the public

Why: Currently no fully open solutions for this exists

How: Service connected to SCM repositories that builds and deploys websites when they change

(what follows are raw thoughts about website-deploy, let me refine before addressing any feedback)

Open Source tool and service for deploying websites.

Designed with stability, performance and transparency in mind.

Helps you iterate quickly on static websites, no matter what tool you use to build it!

### Features

- Some sort of free-plan (limited by storage)
- Fast Previews
- Transparent + 100% Open Source
- Rollbacks!
- Blazing fast to develop with
- Blazing fast for your visitors!
- Stores each version of your website (website history!)
- Public registry of Open Source websites
- Built-In support for most static website tools
- Free HTTPS

- Automated builds via GitHub/GitLab/(Bitbucket?)
- Upload websites directly from your terminal

#### What should be easy to extend?

Not everything should be extensible, as it's not planned to be switchable.

But some pieces do make sense to be extensible from the beginning, they include:

- Built-In platforms (hugo, jekyll, gatsby and so on)
- DNS providers
  - Authentication for the DNS providers too (API token vs managed account)
- Incoming webhooks parsers
  - GitHub and GitLab having different formats
- Setup Steps
  - Basically the pipelines that a website would run

### Why use website-deploy?

Developer looking for a tool and/or service to build and host static websites

### Benchmarks

#### Building

It's important we're faster than every other builder out there, as we're supposed
to improve productivity. That's why we should have benchmarks from day 0 with
`commit > deployed website` being measured.

#### Servers

It's equally important that the websites are not just fast to build but fast to
resolve and load. Benchmarks should be here from day 0 as well.

### Alternatives

- Netlify
- Now/Zeit?
- GitHub Pages
- GitLab (Pages?)
- Surge

### Usage

There are two main ways people are expected to setup website-deploy.

1) Automated builds via GitHub. Starts either at GitHub Marketplace (or similar)
   or via the website. After clicking "Install", user gets to select repositories.
   Once confirmed, user gets sent to website-deploy and can see the build progress

2) via terminal CLI application. User download and installs the CLI, `cd`s to
   their website, builds the website then runs `website-deploy upload $DIR` and
   chosen website gets uploaded.

### Supported Built-In Platforms

Should support at least these before considering "Operating" Phase:

- Jekyll
- Hugo
- Gatsby
- Slate
- Hexo
- Pelican
- Mkdocs
- cobalt.rs

### Custom Domains

Should be available no matter then plan.

Ways of doing it:

- Regular DNS domains
- dnslink (only with supported providers)
- CNAME redirects
- .eth domains (ugh, probably have to run a ethereum node?)

### Decentralized Websites

While the service itself is centralized (something we might fix in the future)
the websites themselves are decentralized at least up to the DNS layer.

All website builds are added to IPFS and also loaded that way. This means you
can use IPFS to visit/download websites and even visit websites while you're
offline, as long as you've loaded them before.

### Pricing

Unclear. Maybe something like this:

- Free = $0/month (up to 10mb/per website) (figure out average size of websites)
- Open Source = $0/month (up to 100mb/per website) (figure out average size of open source websites)
- 1GB = $5/month
- 2GB = $8/month
- 4GB = $10/month

(the prices are wild fantasy. We have to look at what actually makes sense)

(if 4GB is not enough? People write an email/Get a per GB plan?)
