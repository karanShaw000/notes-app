const getBaseUrl = (): string => {
  if (import.meta.env.DEV) {
    return 'http://localhost:5000/api';
  }

    return 'notes-app.azurewebsites.net';
}

export default getBaseUrl

