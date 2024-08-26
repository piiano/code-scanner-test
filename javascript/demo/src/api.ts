import axios from 'axios';
import {User} from './User';

interface ImageResponse {
  imageUrl: string;
}

// Type guard to check if an object is an ImageResponse
function isImageResponse(data: any): data is ImageResponse {
  return (
    data &&
    typeof data === 'object' &&
    'imageUrl' in data &&
    typeof data.imageUrl === 'string'
  );
}

export async function getUserImage(
  serverUrl: string,
  user: User
): Promise<string> {
  try {
    const response = await axios.post<{imageUrl: string}>(
      `${serverUrl}/api/v1/user/getImage`,
      user
    );
    const data: ImageResponse = response.data;
    return data.imageUrl;
  } catch (error) {
    console.error('Error fetching user image:', {
      error,
      user,
      email: user.email,
    });
    throw new Error('Could not fetch user image');
  }
}

export async function fetchUserImage(
  serverUrl: string,
  user: User
): Promise<string> {
  try {
    const response = await fetch(`${serverUrl}/api/v1/user/getImage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    if (isImageResponse(data)) {
      return data.imageUrl;
    } else {
      throw new Error('Response does not contain image URL');
    }
  } catch (error) {
    console.error('Error fetching user image:', error);
    throw new Error('Could not fetch user image');
  }
}
