
# 🚀 Dockerized Multi-Service Application

## Overview

This project demonstrates the deployment of a multi-service application using Docker and Docker Compose. It includes two applications (App1 and App2) and a load balancer implemented with NGINX. Each service operates in isolated containers, and the setup is orchestrated via Docker Compose for simplicity and reproducibility.

## Features

- **App1**: A portfolio web application showcasing personal and professional details.
- **App2**: A simple web-based game.
- **NGINX Load Balancer**: Distributes incoming requests between App1 and App2, providing seamless access and improved performance.

## Prerequisites

- Docker
- Docker Compose

Ensure these tools are installed on your machine. Refer to the Docker installation guide for setup instructions.

---

## Project Structure

```bash
|-- app1/
|   |-- Dockerfile
|   |-- index.html
|
|-- app2/
|   |-- Dockerfile
|   |-- index.html
|
|-- nginx/
|   |-- Dockerfile
|   |-- nginx.conf
|   |-- site.html
|
|-- docker-compose.yml
```

---

## Instructions to Run the Project

### Clone the Repository

```bash
git clone https://github.com/FrancoSbaffi/DevOps-Project.git
cd DevOps-Project
```

Use Docker Compose to build the images and start the containers:

```bash
docker-compose up --build
```

Once the containers are running, open a web browser and navigate to:

- http://localhost/app1: Portfolio application.
- http://localhost/app2: Web-based game.

## Key Components

- **`docker-compose.yml`**: Defines the services (App1, App2, and NGINX), their configurations, and networking.  
- **`App1`**: Configures an Apache web server in Dockerfile and Main HTML file for my portfolio.
- **`App2`**: Configures an Apache web server in Dockerfile and Main HTML file for simple game.
- **`NGINX`**: Uses the NGINX base image, Configures load balancing and routing in `nginx.conf` and Custom landing page for the application on `site.html`.

ℹ️ *Los cambios realizados en la rama `develop` deben ser probados y luego mergeados a `master` mediante un pull request.*

---

## Stopping the Application

To stop the containers, use:

```docker
docker-compose down
```

To remove all images and containers related to this project:

```docker
docker-compose down --rmi all
```

---

## Contact

For issues or queries, please contact:

- Email: francosbaffidev@gmail.com
- GitHub: FrancoSbaffi
