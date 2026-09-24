import { test, expect } from '@playwright/test';

test('PUT /api/members', async ({ request }) => {
    //http://localhost:5002/api/members
    //username = admin, password = admin


    // CRUD
    // Read operation: request.GET request to fetch all members
    // write operation: request.POST request to create a new member
    // Update operation: request.PUT request to update an existing member
    // patch : request.PATCH request to partially update an existing member
    // Delete operation: request.DELETE request to delete a member

    //Authentication types
    // Basic Authentication: 'Authorization': 'Basic ' + Buffer.from('username:password').toString('base64')
    // Bearer Token Authentication: 'Authorization': 'Bearer ' + token
    // API Key Authentication: 'x-api-key': 'your-api-key'
    // OAuth Authentication: 'Authorization': 'Bearer ' + accessToken

    // request .get will take the url and headers as arguments
    // in headers, we include the necessary authentication information

    // Create operation: request.POST request to create a new member

    //{"id":31,"name":"bacs","gender":"male"}
    // Update operation: request.PUT request to update an existing member
    //Status Codes
    // 200 OK: The request was successful, and the member was created.
    // 201 Created: The request was successful, and a new member was created.
    // 400 Bad Request: The request was invalid or missing required parameters.
    // 401 Unauthorized: Authentication failed or user does not have permissions.
    // 403 Forbidden: The server understood the request, but it refuses to authorize it.
    // 404 Not Found: The requested resource could not be found.
    // 500 Internal Server Error: An error occurred on the server side.

    const response = await request.put('http://localhost:5002/api/members/33', {
        headers: {
            ...getBasicAuthHeader('admin', 'admin'),
            'content-type': 'application/json'
        },
        data: {
            "name": "hello",
            "gender": "male"
        }
    });
    // Log the response body for debugging purposes
    
    console.log(await response.text());
    expect(response.status()).toBe(200);
});

export function getBasicAuthHeader(username: string, password: string) {
  return {
    Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
  };
}

export function getBearerAuthHeader(token: string) {
  return {
    Authorization: `Bearer ${token}`
  };
}
    
export function getApiKeyAuthHeader(apiKey: string) {
  return {
    'x-api-key': "demo-api-key-12345"
  };
}