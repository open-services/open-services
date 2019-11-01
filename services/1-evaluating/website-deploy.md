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
- Deploy previews in Pull Requests / Merge Requests
- Built-In support for most static website tools
- Free HTTPS

- Automated builds via GitHub/GitLab/(Bitbucket?)
- Upload websites directly from your repository, terminal or the web interface

#### What should be easy to extend?

Not everything should be extensible, as it's not planned to be switchable.

But some pieces do make sense to be extensible from the beginning, they include:

- Built-In Build Platforms (hugo, jekyll, gatsby and so on)
- DNS providers
  - Authentication for the DNS providers too (API token vs managed account)
- Incoming webhooks parsers
  - GitHub and GitLab having different formats
- Setup Steps (should also somehow be reusable)
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

3) Drag and drop directories into a web interface. User signs up, opens the upload
   page and their file explorer. Navigates to the source of their website and
   drags the directory into the web interface. Now it's uploaded!

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

#### Dynamic Pricing

Another interesting pricing strategy would be to combine the available storage
and bandwidth, change the pricing depending on that.

So the more size is being used by sites, the more expensive the plans get. Up
until the point where more storage is available in the service.

Tradeoff is that it becomes a bit of a pyramid scheme where the earlier you
create your site, the cheaper it gets.

### Handling incoming deletion-requests

In order to be lawful, the service needs to respond to incoming requests from
law enforcement when requesting deletion of websites.

### Analytics

Website-Deploy will gather metrics all around the platform to better understand
the usage and be able to troubleshoot issues when they arise. We commit to making
sure the same data we use for this, is the very same data and UI you yourself
can you to get insights into the running service. With this commitment, comes
the commitment of making sure the data is aggregated and anonomous enough that
no one will be able to get insights into YOUR specific project.
