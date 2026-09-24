import { test, expect } from '@playwright/test';

test('GET /api/members', async ({ request }) => {
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

    const response = await request.get('http://localhost:5002/api/members', {
        headers: {
            'Authorization': 'Basic ' + Buffer.from('admin:admin').toString('base64')
        }
    });

    // Log the response body for debugging purposes
    console.log(await response.text());
    expect(response.status()).toBe(200);
});