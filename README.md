# Gym Membership Management Application

This project is a web application designed for gym owners to manage memberships, track attendance, process payments, and manage membership plans. The application is built using Angular, leveraging modular architecture, lazy loading, and Angular Material for an enhanced user experience.

---

## Features

- **Member Management**:
  - Add, edit, view, and delete member details.
  - Manage contact information and membership status.
  
- **Attendance Tracking**:
  - Record and view members' attendance history.
  
- **Payment Tracking**:
  - Track payment records and dues.
  - View payment history by member.

- **Membership Plans**:
  - Manage and categorize membership plans (e.g., monthly, yearly).
  
- **Dashboard**:
  - Overview of membership stats, attendance, and payments.

---

## Technology Stack

- **Frontend**: [Angular](https://angular.io/)
  - Angular Material for UI components
  - Modular architecture with lazy loading
- **Backend**: To be integrated.
- **Database**: To be decided (e.g., MySQL, MongoDB).
- **Styling**: CSS, Angular Material

---

## Project Structure

```plaintext
src/
│
├── app/
│   ├── core/                # Core module: Singleton services, guards, global components
│   │   ├── header/          # Header component
│   │   ├── footer/          # Footer component
│   │   ├── services/        # Global services (e.g., AuthService)
│   │   ├── guards/          # Route guards (e.g., AuthGuard)
│   │   └── core.module.ts   # CoreModule definition
│   │
│   ├── shared/              # Shared module: Reusable components, directives, pipes
│   │   ├── components/      # Generic components
│   │   ├── directives/      # Custom directives
│   │   ├── pipes/           # Custom pipes
│   │   └── shared.module.ts # SharedModule definition
│   │
│   ├── features/            # Feature-specific modules
│   │   ├── home/            # HomeModule for dashboard
│   │   ├── members/         # MembersModule for member management
│   │   │   ├── components/  # Member-specific components
│   │   │   │   ├── member-list/      # List members
│   │   │   │   ├── member-details/   # View/edit member details
│   │   │   ├── members-routing.module.ts # Members module routing
│   │   │   ├── members.module.ts         # Members module definition
│   │   ├── payments/        # PaymentsModule for payment tracking
│   │   ├── plans/           # PlansModule for membership plans
│   │   └── attendance/      # AttendanceModule for tracking attendance
│   │
│   ├── app-routing.module.ts # Central routing setup
│   ├── app.component.ts      # Root application component
│   ├── app.module.ts         # Root application module
│
└── assets/                   # Static assets (images, styles, etc.)

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14+ recommended)
- [Angular CLI](https://angular.io/cli) (version 15+ recommended)

### Steps
1. **Clone the Repository**  
   Open a terminal and run:
   ```bash
   git clone https://github.com/your-repo/gym-membership-management.git
   cd gym-membership-management

2. **Install Dependencies**  
   Use the following command to install all project dependencies:
   ```bash
   npm install
3. ** Start the Development Server
 Run the development server with:
 ```bash
 ng serve

 # Gym Management System Documentation

## Access the Application
Open your browser and navigate to http://localhost:4200 to view the application.

## Table of Contents
- [Usage](#usage)
- [Development](#development)
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact)

## Usage

### Application Navigation

The application is structured into several key sections for easy management:

#### 🏠 Home Page
- Comprehensive dashboard view of gym operations
- Quick navigation links to all major features
- Real-time statistics and updates

#### 👥 Members Section
- Complete member directory
- Add, edit, and remove member profiles
- Detailed member information management

#### ✓ Attendance Section
- Daily attendance tracking
- Historical attendance records
- Attendance reports and analytics

#### 💰 Payments Section
- Payment processing and tracking
- Due payment notifications
- Complete payment history

#### 📋 Plans Section
- Membership plan management
- Customize plan features
- Price and duration settings

### Navigation Example

Use Angular's built-in routing for seamless navigation:

```html
<button mat-raised-button color="primary" routerLink="/members">View Members</button>
```

### Route Structure

| Path | Function |
|------|----------|
| `/home` | Main dashboard |
| `/members` | Member management |
| `/payments` | Payment tracking |
| `/plans` | Plan management |
| `/attendance` | Attendance system |
| `**` | Home redirect |

## Development

### Command Reference

Create a new module:
```bash
ng generate module features/<module-name> --routing
```

Add a component:
```bash
ng generate component features/<module-name>/components/<component-name>
```

Install Material UI:
```bash
ng add @angular/material
```

### Routing Configuration

```typescript
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./features/members/members.module')
      .then(m => m.MembersModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
```

## Contribution

### Getting Started

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/amazing-feature
```
3. Commit your changes:
```bash
git commit -m "Add amazing feature"
```
4. Push to your branch:
```bash
git push origin feature/amazing-feature
```
5. Open a Pull Request

### Development Guidelines
- Follow Angular style guide
- Write clear commit messages
- Include tests for new features
- Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Maintainer: laatfaamine@gmail.com

GitHub: [your-profile](https://github.com/aminelt)

---
*Built with ❤️ using Angular and Material UI
