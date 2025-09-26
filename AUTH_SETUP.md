# NextAuth.js Setup Instructions

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Admin Credentials (change these in production)
ADMIN_EMAIL=admin@dancestudio.com
ADMIN_PASSWORD=admin123

# Database
DATABASE_URL="file:./dev.db"
```

## Features Implemented

### 1. Authentication System
- ✅ NextAuth.js integration with credentials provider
- ✅ JWT-based session management
- ✅ Admin role-based access control
- ✅ Protected admin routes with middleware

### 2. Admin Login Page
- ✅ Clean, responsive login form
- ✅ Demo credentials display
- ✅ Error handling and loading states
- ✅ Automatic redirect after successful login

### 3. Route Protection
- ✅ Middleware protection for all `/admin/*` routes
- ✅ Automatic redirect to login for unauthenticated users
- ✅ Role-based access control (admin only)
- ✅ Session validation on every request

### 4. User Interface
- ✅ Logout button in admin sidebar
- ✅ Session provider for client-side auth state
- ✅ Protected route component for additional security
- ✅ Custom auth hook for easy session management

## Usage

### Default Admin Credentials
- **Email**: admin@dancestudio.com
- **Password**: admin123

### Accessing Admin Panel
1. Navigate to `/admin/login`
2. Enter the admin credentials
3. You'll be redirected to `/admin` dashboard
4. All admin routes are now protected

### Logout
- Click the "Logout" button in the admin sidebar
- You'll be redirected to the login page

## Security Notes

### Production Deployment
1. **Change default credentials** in environment variables
2. **Use a strong NEXTAUTH_SECRET** (generate with: `openssl rand -base64 32`)
3. **Use HTTPS** in production (update NEXTAUTH_URL)
4. **Consider database-based user management** for multiple admins
5. **Implement password hashing** for stored credentials

### Additional Security Measures
- All admin routes are protected by middleware
- JWT tokens are used for session management
- Automatic session validation on route changes
- Role-based access control implemented

## File Structure

```
├── lib/auth.ts                           # NextAuth configuration
├── app/api/auth/[...nextauth]/route.ts   # NextAuth API routes
├── middleware.ts                         # Route protection middleware
├── app/admin/login/page.tsx              # Admin login page
├── components/providers/session-provider.tsx  # Session provider
├── components/admin/logout-button.tsx    # Logout component
├── components/admin/protected-route.tsx  # Protected route wrapper
├── hooks/use-session.ts                  # Custom auth hook
└── .env.local                           # Environment variables (create this)
```

## Next Steps

1. **Create the `.env.local` file** with the provided variables
2. **Test the login functionality** with the demo credentials
3. **Customize the admin credentials** for your needs
4. **Deploy with proper environment variables** in production

The authentication system is now fully integrated and ready to use!
