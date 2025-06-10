# Zeebries Reservation

This is a Laravel + React starter kit using Inertia.

## Quick start

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd zeebries-reservation
   ```
2. **Install PHP dependencies**
   ```bash
   composer install
   ```
3. **Install Node dependencies**
   ```bash
   npm install
   ```
4. **Copy the environment file**
   ```bash
   cp .env.example .env
   ```
5. **Generate the application key**
   ```bash
   php artisan key:generate
   ```
6. **Configure the database**
   - Update the credentials in `.env` if necessary.
   - Create an SQLite database with:
     ```bash
     touch database/database.sqlite
     ```
7. **Run migrations and seeders**
   ```bash
   php artisan migrate --seed
   ```
8. **Start the development servers**
   ```bash
   composer run dev
   ```
   This command runs the PHP server, queue worker and Vite in watch mode.

## Testing

Run the test suite with Pest:
```bash
./vendor/bin/pest
```

You can also check TypeScript types and lint the code:
```bash
npm run types
npm run lint
```
