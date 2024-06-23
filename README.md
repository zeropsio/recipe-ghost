# Zerops x Ghost CMS

![Ghost](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/cover-ghost.png)

[Ghost](https://github.com/TryGhost/Ghost) is a full headless CMS and also an open source blogging platform written in JavaScript and distributed under the MIT License, designed to simplify the process of online publishing for individual bloggers as well as online publications. [Zerops](https://zerops.io) recipe for Ghost includes all necessary parts to demonstrate its power in Zerops environment.

## Deploy on Zerops

You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-ghost/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/green/deploy-button.svg)](https://app.zerops.io/recipe/ghost)

## Recipe features

- Zerops **MariaDB 10.6** service as database
- Zerops **Object Storage** (S3 compatible) service as file system
- Logs set up to use **syslog** and accessible through Zerops GUI
- Utilization of Zerops built-in **environment variables** system
- [Mailpit](https://github.com/axllent/mailpit) as **SMTP mock server**

## How to use installed recipe in Zerops GUI

- Wait till the moment the recipe's services are installed and initialized.
- Open the auto-generated subdomain URL available for the `ghost` service.
- Switch to the admin client GUI through adding `/ghost` route to the subdomain URL.
- Fill out the form to register as an administrator of the new Ghost site.
- Open the auto-generated subdomain URL available for the `mailpit` service.
- Check a confirmation email sent from the Ghost service.
- Use installed and running Ghost CMS to publish articles.
- Register new subscribers to consume the Ghost site content.

## Production vs. recipe mode

The difference may come down to:

- Use the highly available version of the MariaDB database (change `mode` from `NON_HA` to `HA` in recipe YAML, `db` service section) when the Galera cluster is created.
- Using `SET SESSION wsrep_sync_wait=1;` or changing the Galera cluster configuration by `wsrep_sync_wait=1` to force synchronization among database nodes because of the actual state of Ghost's support for database HA.
- Use a production-ready third-party SMTP server instead of Mailpit.

## Warning

It's impossible to use more containers of Ghost services than one (like `minContainers: 2` in recipe YAML, `ghost` service section) because of the limitation of inner Ghost architecture. Otherwise, different containers will return different results because of caching logic after creating new content.

Need help setting your project up? Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).
