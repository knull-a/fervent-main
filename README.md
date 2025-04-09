# Fervent Main

A modern Vue 3 application built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js (LTS version)
- pnpm (package manager)
- Docker & Docker Compose (for containerized deployment)

### Local Development

1. Install dependencies:

```bash
pnpm install
```

2. Start development server:

```bash
pnpm dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Production Build

1. Build the application:

```bash
pnpm build
```

2. Preview the production build:

```bash
pnpm preview
```

## 🐳 Docker Deployment

### Running with Docker

1. Build and start the containers:

```bash
docker-compose up --build
```

2. Access the application at [http://localhost:5173](http://localhost:5173)

### Development with Docker

- Hot-reload is enabled by default
- Source changes trigger automatic rebuilds
- Container automatically restarts on file changes

### Docker Commands

```bash
# Start containers
docker-compose up --build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Check container status
docker-compose ps

# Rebuild without cache
docker-compose up --build --force-recreate
```

## 🛠️ Development Tools

### IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)

### TypeScript Support

- Uses `vue-tsc` for type checking
- Requires [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) for `.vue` type support

### Code Quality

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

## 📦 Project Structure

```
fervent-main/
├── src/              # Source files
├── public/           # Static assets
├── node_modules/     # Dependencies
├── .vscode/          # VSCode settings
├── Dockerfile        # Docker configuration
├── docker-compose.yml # Docker Compose configuration
├── vite.config.ts    # Vite configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project metadata and scripts
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## 📚 Dependencies

- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Pinia (State Management)
- Vue Router
