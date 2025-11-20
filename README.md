# Stellar Croak Bot

Telegram bot for the Stellar Croak game.

## Docker Deployment

This project includes Docker configuration for easy deployment.

### Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

### Building and Running

1. Build the Docker image:

```bash
docker build -t stellar-croak-bot .
```

2. Run with Docker Compose:

```bash
docker-compose up -d
```

### Environment Variables

The bot uses the following environment variables:

- `BOT_TOKEN` - Telegram bot token (replace the hardcoded token in bot.js for production)

### Directory Structure

- `bot.js` - Main bot logic
- `Dockerfile` - Docker configuration
- `docker-compose.yml` - Docker Compose configuration
- `.dockerignore` - Files ignored during Docker build
- `healthcheck.js` - Health check script

### Notes

- The bot token is currently hardcoded in `bot.js`. For production deployments, consider using environment variables.
- The container will automatically restart unless stopped manually.
