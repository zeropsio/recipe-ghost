# Recipe Ghost

Zerops Ghost implementation.

## Zerops YAML import script

The script is intended to create a new project **ghost-app** with four services represented by hostnames: **db** (fully managed [Zerops MariaDB](https://docs.zerops.io/documentation/services/databases/mariadb.html) database), **storage** (fully managed [Zerops S3-compatible](https://docs.zerops.io/documentation/services/storage/s3.html) object storage), **ghost** ([Zerops Node.js-based](https://docs.zerops.io/documentation/services/runtimes/nodejs.html) Ghost application instance), and **mailhog** ([Zerops Go-based](https://docs.zerops.io/documentation/services/runtimes/golang.html) shadow SMTP server). The **db** and **storage** services are created first with `priority: 1`. They have to exist and run before the runtime services **ghost** and **mailhog** will be built, deployed, and run.

```yaml
project:
  name: ghost-app
  tags:
    - Ghost
    - MailHog
    - MariaDB
    - CEPH
services:
  - hostname: db
    type: mariadb@10.4
    mode: NON_HA
    priority: 1
  - hostname: storage
    type: object-storage
    objectStorageSize: 2
    priority: 1
  - hostname: ghost
    type: nodejs@16
    envVariables:
      AWS_DEFAULT_REGION: us-east-1
      AWS_ACCESS_KEY_ID: ${storage_accessKeyId}
      AWS_SECRET_ACCESS_KEY: ${storage_secretAccessKey}
      STORAGE_HOSTNAME: ${storage_hostname}
      STORAGE_BUCKET_PREFIX: ${storage_serviceId|lower}
      STORAGE_BUCKET_NAME: ghostdata
      GHOST_STORAGE_ADAPTER_S3_PATH_BUCKET: ${STORAGE_BUCKET_PREFIX}.${STORAGE_BUCKET_NAME}
      GHOST_STORAGE_ADAPTER_S3_ASSET_HOST: ${storage_apiUrl}/${GHOST_STORAGE_ADAPTER_S3_PATH_BUCKET}
      GHOST_STORAGE_ADAPTER_S3_ENDPOINT: ${storage_apiUrl}
      GHOST_STORAGE_ADAPTER_S3_FORCE_PATH_STYLE: true
      database__connection__database: ${db_hostname}
      database__connection__host: ${db_hostname}
      database__connection__password: ${db_password}
      database__connection__user: ${db_user}
      url: ${zeropsSubdomain}
    ports:
      - port: 2368
        httpSupport: true
    minContainers: 1
    maxContainers: 1
    buildFromGit: https://github.com/zeropsio/recipe-ghost@main
    enableSubdomainAccess: true
  - hostname: mailhog
    type: go@1
    envVariables:
      MH_API_BIND_ADDR: 0.0.0.0:8025
      MH_CORS_ORIGIN: "*"
      MH_HOSTNAME: mailhog
      MH_SMTP_BIND_ADDR: 0.0.0.0:1025
      MH_UI_BIND_ADDR: 0.0.0.0:8025
    ports:
      - port: 8025
        httpSupport: true
      - port: 1025
        httpSupport: true
    minContainers: 1
    maxContainers: 1
    buildFromGit: https://github.com/zeropsio/recipe-mailhog@main
    enableSubdomainAccess: true
```
