const request = require('supertest');
const app = require('../app');

let id;
let token;

test('POST /users debe crerar un usuario', async () => {
    const body ={
        firstName:lastName,
        lastName:lastName,
        email:email,
        password:password,
        gender:gender
    }
    const res = await request(app).post('/users')
    .send(body);
    id=res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(body.firstName);
    expect(res.body.id).toBeDefined();
});

test('POST /users/login debe permitir logearse', async () => {
    const body = {
        email:email,
        password:password
    }
    const res = await request(app).post('/users/login').send(body);
    token = res.body.token;
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.user.email).toBe(body.email);
});

test('POST /users/login cuando usa credenciales invalidas', async () => {
    const body = {
        email:email,
        password:password
    }
   
    const res = await request(app).post('/users/login').send(body);
    expect(res.status).toBe(401);
});

test('GET /users debe traer todos los usuarios', async () => {
    const res = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
});

test('PUT /users/:id actualiza un usuario por su id', async () => {
    const body = {
        firstName:firstName
    }
    const res = await request(app).put(`/users/${id}`)
        .send(body)
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(body.firstName);
});

test('DELETE /users/:id debe eliminar un  usuario por su id', async () => {
    const res = await request(app)
        .delete(`/users/${id}`)
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(204);
});