export const getPath = (path: string) => {
  // return `http://localhost:8080/${path}`;
  return `https://tyrael.up.railway.app/${path}`;
}

export async function getServerData(path: string) {
  const response = await fetch(getPath(path), {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data = await (response.json());
  return data;
}

export async function getValidateData(path: string) {
  const response = await fetch(getPath(path), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data = await (response.json());
  return data;
}

export async function getCachedData(path: string) {
  const response = await fetch(getPath(path), {
    cache: 'force-cache',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data = await (response.json());
  return data;
}

