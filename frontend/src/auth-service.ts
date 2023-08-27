import {ref} from 'vue';


export const user = ref();
export const loaded = ref(false);

export async function fetchUser() {
  try {
    user.value = JSON.parse(localStorage.getItem('user'));

    return user.value;
  } catch {
    return null;
  } finally {
    loaded.value = true;
  }
}

export async function login(username: string) {
  localStorage.setItem('user', JSON.stringify({
    username,
  }));
  fetchUser();
}

export async function logout() {
  localStorage.removeItem('user');
  user.value = null;
}