const getBaseUrl = (): string => {
  if (import.meta.env.MODE === 'development') {
    return 'http://localhost:5000/api';
  }

    return 'notes-app.azurewebsites.net/api';
}

export default getBaseUrl

