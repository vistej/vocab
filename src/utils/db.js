import { openDB } from 'idb';

export const getDB = () => {
  openDB('vocab-app', 1, {
    upgrade(db) {
      db.createObjectStore('userProgress');
    },
  });
};
