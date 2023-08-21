export default function getRequest(url: string) {
    return fetch(url)
      .then(response => response.json())
      .then(data => { return data })
      .catch(error => console.error('Error fetching data:', error));
}