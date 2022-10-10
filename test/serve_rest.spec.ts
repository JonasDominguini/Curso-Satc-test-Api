import pactum from 'pactum';
import { SimpleReporter } from '../simple-reporter';
import { faker } from '@faker-js/faker' 

describe('ServeRest API', () => {
  let token = '';
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://serverest.dev';

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());

  describe('Login', () => {
    it('POST', async () => {
      token = await p
        .spec()
        .post(`${baseUrl}/login`)
        .withJson({
          email: 'fulano@qa.com',
          password: 'teste'
        })
        .expectStatus(200)
        .returns('authorization');
    });
  });

  describe('Usuários', () => {
    it('GET ALL', async () => {
      await p
        .spec()
        .get(`${baseUrl}/usuarios`)
        .withHeaders('Authorization', token)
        .expectStatus(200);
    });
  });

  describe('Produtos', () => {
    it('GET ALL', async () => {
      await p
        .spec()
        .get(`${baseUrl}produtos`)
        .withHeaders('Authorization', token)
        .withJson({
          nome: 'Notebook Acer',
          preco: 10000,
          descricao: 'Notebook',
          quantidade: 1
        })
        .expectStatus(200)
        .expectBodyContains('Cadastro realizado com sucesso');
    });

    it('GET produtos')
  });
  
});
