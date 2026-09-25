import { randomUUID } from "node:crypto";

export type Session = {
  id: string;
  userId: string;
  refreshTokenHash: string;
  createdAt: number;
  lastUsedAt: number;
  revokedAt: number | null;
};

const sessions = new Map<string, Session>();

const create = (userId: string, refreshTokenHash: string): Session => {
  const now = Date.now();

  const session: Session = {
    id: randomUUID(),
    userId,
    refreshTokenHash,
    createdAt: now,
    lastUsedAt: now,
    revokedAt: null,
  };

  sessions.set(session.id, session);

  return session;
};

const getById = (id: string): Session | undefined => {
  return sessions.get(id);
};

const findByRefreshHash = (
  refreshTokenHash: string
): Session | undefined => {
  for (const session of sessions.values()) {
    if (session.refreshTokenHash === refreshTokenHash) {
      return session;
    }
  }

  return undefined;
};

const revoke = (id: string): Session | undefined => {
  const session = sessions.get(id);

  if (!session) {
    return undefined;
  }

  session.revokedAt = Date.now();

  return session;
};

export const sessionStore = {
  create,
  getById,
  findByRefreshHash,
  revoke,
};