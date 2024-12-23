
# 🚀 Version 2.0

A major upgrade introducing App3, advanced tools, load balancing, and reverse proxy setups.

---

## Key Changes

1. **App3 Dashboard**:
   - Professional UI and API routes: /users, /products.

2. **Mock Data**:
   - Simulated data in mock-data folder.

3. **NGINX Proxy**:
   - Redirects /app3 to port 3002.

4. **Docker Support**:
   - Updated Dockerfile and docker-compose.yml.

---

## Deployment

1. Clone and navigate:

```bash
git clone --branch version2.0 https://github.com/FrancoSbaffi/DevOps-Project.git
cd DevOps-Project
```

2. Build and launch:

```bash
docker-compose --env-file .env.version2.0 up --build
```

## Technical Highlights

- Block Storage: Persistent volumes for data.
- Reverse Proxy: Simplifies routing with NGINX.
- Load Balancing: Distributes traffic across App3 instances.

## Run Scripts

```bash
bash docker/scripts/generate_users.sh
```
