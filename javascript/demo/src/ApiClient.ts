import axios from 'axios';
import {Client} from './model/Client';
const serverUrl = 'http://localhost:8080/api/clients';

// Using axios for GET request to /api/clients
async function getAllClients(): Promise<Client[]> {
  try {
    const response = await axios.get<Client[]>(serverUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching all clients:', error);
    throw error;
  }
}

// Using fetch for GET request to /api/clients/all
async function getAllClients2(): Promise<Client[]> {
  try {
    const response = await fetch(`${serverUrl}/all`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Client[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all clients (all):', error);
    throw error;
  }
}

// Using XMLHttpRequest for POST request to /api/clients
function createClient(client: Client): Promise<Client> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', serverUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error(`Error creating client: ${xhr.statusText}`));
        }
      }
    };
    xhr.send(JSON.stringify(client));
  });
}

// Using axios for PUT request to /api/clients/{id}
async function updateClient(
  id: number,
  updatedClient: Client
): Promise<Client> {
  try {
    const response = await axios.put<Client>(
      `${serverUrl}/${id}`,
      updatedClient
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating client with id ${id}:`, error);
    throw error;
  }
}

// Using fetch for DELETE request to /api/clients/{id}
async function deleteClient(id: number): Promise<void> {
  try {
    const response = await fetch(`${serverUrl}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error(`Error deleting client with id ${id}:`, error);
    throw error;
  }
}
