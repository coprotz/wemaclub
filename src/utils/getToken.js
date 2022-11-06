import { v4 as uuidv4 } from 'uuid';
const endPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
const room_id = process.env.REACT_APP_ROOM_ID;


export default async function getToken(role) {
  const response = await fetch(`${endPoint}api/token`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: uuidv4(), // User ID assigned by you (different from 100ms' assigned id)
      role, // listener , speaker , moderator
      room_id,
    }),
  });

  const { token } = await response.json();

  return token;
}