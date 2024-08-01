// src/types/express.d.ts
import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    userId?: string;
    userRole?: string; // Agrega también userRole si lo necesitas
  }
}
