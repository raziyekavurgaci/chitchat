export interface JwtPayload {
  userId: string;
  jti?: string;
}

declare global {
  interface Request {
    user: JwtPayload;
  }
}
