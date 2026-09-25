import { randomUUID } from "node:crypto";

type StoredUser = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
};

const users = new Map<string, StoredUser>();

const create = (
  name: string,
  email: string,
  passwordHash: string,
): StoredUser => {
  const user: StoredUser = {
    id: randomUUID(),
    name,
    email,
    passwordHash,
  };
  users.set(user.id, user);
  return user;
};

const getByID = (id: string): StoredUser | undefined => {
  return users.get(id);
};

const getByEmail = (email: string): StoredUser | undefined => {
  for (const user of users.values()) {
    if (user.email === email) {
      return user;
    }
  }
  return undefined;
};

export const userStore = {
  create,
  getByEmail,
  getByID,
};
