# Zerops x Ghost CMS

[Ghost](https://github.com/TryGhost/Ghost) is an open source blogging platform that can be used as a headless CMS. This recipe showcases how to properly setup and run Ghost on Zerops.

![Ghost](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/png/cover-ghost.png)

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

## Production vs. development mode

The difference may come down to:

- Use the highly available version of the MariaDB database (change `mode` from `NON_HA` to `HA` in recipe YAML, `db` service section) in which case Galera cluster is created. Use SQL command `SET GLOBAL wsrep_sync_wait=1;` to globally set the synchronization among database nodes because of the actual state of Ghost's support for database HA. The best place where to do it is in the `run.initCommands` of the [zerops.yml](https://github.com/zeropsio/recipe-ghost/blob/main/zerops.yml) file.
- Think about some caching mechanism (such as Zerops KeyDB service, CDN) instead of the database HA mode because of the static character of the Ghost pages.
- Use a production-ready third-party SMTP server instead of Mailpit.

> [!WARNING]
> Ghost does not support high availability (running on multiple container), make sure vertical autoscaling is fixed on 1 container (default in this recipe).

Need help setting your project up? Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).
