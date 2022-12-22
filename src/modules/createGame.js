const createGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    body: JSON.stringify({ name: 'my game' }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return response.json();
};

export default createGame;