const pkgcloud = require('pkgcloud');

const client = pkgcloud.storage.createClient({
  provider: 'openstack',
  username: process.env.OS_USERNAME,
  password: process.env.OS_PASSWORD,
  tenantName: process.env.OS_TENANT_NAME,
  authUrl: process.env.OS_AUTH_URL,
  strictSSL: false,
  region: 'RegionOne',
  useAdmin: true,
  version: 3
});

class IOServer {
  constructor(io) {

    if(io === undefined) {
      return;
    }

    io.on('connection', (socket) => {

      socket.on('vault:get_containers', (data, fn) => {

        const options = {
          limit: data.limit || 10000,
          marker: data.marker || null,
          end_marker: data.end_marker || null
        }

        client.getContainers(options, (err, containers) => {
          if (err) { console.log(err); }
          else {
            fn(containers
              .filter((container) => { return !container.name.startsWith('.') })
              .map((container) => {
                return {
                  name: container.name,
                  count: container.count,
                  bytes: container.bytes
                }})
            );

          }
        });
      });

      socket.on('vault:get_objects', (data, fn) => {
        client.getFiles(data.container, (err, files) => {
          if (err) { console.log(err); }
          else {
            fn(files
              .map((file) => { return {name: file.name, }})
            );
          }
        });
      });
    });
  }

  getTenantSize(){
    return client.getContainers(options, (err, containers) => {
      return containers.length
    })
  }
}

module.exports = IOServer;
