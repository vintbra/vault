# Vault
UI client for OpenStack Swift and Amazon S3

## Getting Started

1. Clone this repo

  ```
  git clone https://github.com/stormers/vault
  ```
2. Install dependencies
    ```
    cd vault
    npm install
    ```

3. Export credentials
  ```
  export OS_USERNAME=<swift-username>
  export OS_PASSWORD=<swift-password>
  export OS_TENANT_NAME=<swift-tenant-name>
  export OS_AUTH_URL=https://keystone:5000
  ```

4. Build and start the server
  ```
  npm run build
  npm run start:server
  ```
  
**App listening on port 8888!**
