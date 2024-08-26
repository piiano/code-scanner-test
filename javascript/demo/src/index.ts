import { User } from "./User";

// Example usage:
const user: User = {
  name: 'John Doe',
  address: '123 Main St, Anytown, USA',
  phone: '555-123-4567',
  email: 'johndoe@example.com',
};

const serverUrl = 'https://example.com'; // Replace this with your server URL

getUserImage(serverUrl, user)
  .then(imageUrl => {
    console.log('User image URL:', imageUrl);
  })
  .catch(error => {
    console.error('Error:', error);
  });
