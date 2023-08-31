import {ref} from 'vue';
import remult from './remult-service.ts';

export const user = ref();
export const loaded = ref(false);

export async function fetchUser() {
  try {
    const res = await fetch('/api/user-profile')
    user.value = await res.json()
    remult.user = user.value;
    return user.value;
  } catch {
    return null;
  } finally {
    loaded.value = true;
  }
}

export async function login(username: string) {
  await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username})
  })
  fetchUser();
}

export async function logout() {
  await fetch('/api/logout', {method: 'post'})
  user.value = null;
}