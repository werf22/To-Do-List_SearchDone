// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Declare a global variable to hold the Prisma Client instance.
// This is necessary because in development, Next.js clears the Node.js
// module cache on every request, which would otherwise lead to multiple
// PrismaClient instances being created, exhausting database connections.
declare global {
  // Use 'var' to declare a global variable that persists across module reloads in development.
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Initialize Prisma Client
const prisma =
  global.prisma || // Use existing instance if available (in development)
  new PrismaClient({
    // Optional: Log Prisma queries for debugging during development.
    // Choose the log levels you need.
    // log:
    //   process.env.NODE_ENV === 'development'
    //     ? ['query', 'info', 'warn', 'error']
    //     : ['error'],
  });

// In development, assign the newly created instance back to the global variable.
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

// Export the singleton instance for use throughout your application.
export default prisma;

// You can also directly export the type if needed elsewhere
export type { Task } from '@prisma/client';