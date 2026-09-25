import { test } from '../fixtures/basetest';

test('example test', async ({ adminCreds,apikey }) => {
    console.log(adminCreds.username);
    console.log(adminCreds.password);
    console.log(adminCreds.otp);
    console.log(apikey);
});

test('example test1', async ({apikey }) => {
    console.log(apikey);
});