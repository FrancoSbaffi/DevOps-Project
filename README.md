# (Develop Branch)

This branch  (`develop`) was originally used to enable development without impacting the production branch `master`, Now aligned with `master`, it has fulfilled its purpose and does not require further changes. However, `develop`  has been adapted to provide an alternative setup leveraging AWS services if required.

## Key Changes

- **Reverse Proxy (NGINX)**: Manages incoming traffic to  `app1` and  `app2`, providing clean routes and centralizing access configuration.
- **Block Storage (AWS EBS):** Application data is stored on an EBS volume, ensuring persistence and separating application logic from data storage.

## Reverse Proxy

The  `nginx.conf` defines upstreams for `app1` and `app2` as follows:

```nginx
http {
    upstream app1 {
        server app1:80;
    }

    upstream app2 {
        server app2:80;
    }

    server {
        listen 80;

        # Redirect /app1 to app1
        location /app1/ {
            proxy_pass http://app1/;
        }

        # Redirect /app2 to app2
        location /app2/ {
            proxy_pass http://app2/;
        }

        # Main page
        location / {
            root /usr/share/nginx/html;
            index site.html;
        }
    }
}
```

Requests to `http://myinstance/app1/` are served by `app1`, while requests to `http://myinstance/app2/` are served by `app2`. NGINX acts as a single entry point, simplifying external access to the applications.

## Block Storage

While the master branch simulated block storage using Docker volumes, the develop branch uses an `AWS EBS` volume for data persistence and a more production-like environment. The EBS volume:

- Is mounted on the EC2 instance at `/ebs-data`.
- Uses bind mounts in the `docker-compose.yml` file, allowing `app1` and `app2` to serve content from `/ebs-data/app1` and `/ebs-data/app2`, respectively.

```docker-compose.yml
services:
  app1:
    build:
      context: ./app1
    image: app1_image:latest
    volumes:
      - /ebs-data/app1:/var/www/html

  app2:
    build:
      context: ./app2
    image: app2_image:latest
    volumes:
      - /ebs-data/app2:/var/www/html
```

This ensures that files served by the applications are stored on the EBS volume (block storage) rather than ephemeral container storage. If a container is removed or recreated, the data remains intact on the EBS volume.

### Docker Image Creation and Deployment

Each service (app1, app2, nginx) has its own Dockerfile. Images are built, and containers are deployed using Docker Compose:

```bash
docker-compose down
docker-compose up -d --build
```

This branch showcases multiple approaches to implementing the project, emphasizing adaptability and leveraging AWS for enhanced production readiness.
