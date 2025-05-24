# Admin Panel

A dynamic admin panel built with Angular and Material UI for managing products, users, and transactions.

## Features

- Secure login system
- Dashboard with key metrics
- Product management with approval workflow
- User management with status control
- Transaction monitoring
- Responsive design
- Material UI components
- Cross-platform compatibility

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v15 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd admin-panel
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── product-management/
│   │   ├── transaction-monitoring/
│   │   └── user-management/
│   ├── models/
│   ├── services/
│   └── shared/
├── assets/
└── environments/
```

## Development

- Run `ng serve` for a dev server
- Run `ng build` to build the project
- Run `ng test` to execute unit tests
- Run `ng e2e` to execute end-to-end tests

## Deployment

1. Build the project:
```bash
ng build --configuration production
```

2. Deploy the contents of the `dist/admin-panel` directory to your hosting service (e.g., Netlify, Vercel, or any static hosting).

## Environment Configuration

The application uses environment files for configuration:

- `environment.ts` - Development environment
- `environment.prod.ts` - Production environment

Update the `apiUrl` in these files to point to your backend API.

## Security

- The application implements token-based authentication
- All API calls are made over HTTPS
- Sensitive data is stored securely
- Input validation is implemented throughout the application

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
