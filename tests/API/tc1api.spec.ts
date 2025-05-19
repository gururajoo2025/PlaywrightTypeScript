import { test , expect, request} from '@playwright/test'

test.describe.parallel("Simple API", () => {

    // test("POST Create New User", async ({ request}) => {

    //     const response = await request.post('https://petstore.swagger.io/v2/user/createWithList',{
    //         data: {
    //     "id": 33,
    //     "username": "gururaar",
    //     "firstName": "Guru",
    //     "lastName": "Raj",
    //     "email": "gr@gmail.com",
    //     "password": "qwerty123@@",
    //     "phone": "0236782919",
    //     "userStatus": 0
    // }
    //     })
    //     // expect(response.status()).toBe(200)
    //     const responseBody = JSON.parse(await response.text())
    //     console.log(responseBody)
    // })

    test("GET Get Details", async ({ request}) => {

        const response = await request.get('https://petstore.swagger.io/v2/user/gururajrathnam')
        // expect(response.status()).toBe(200)
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
    })
})
