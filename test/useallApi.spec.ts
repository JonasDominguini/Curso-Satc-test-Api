import pactum from 'pactum';
import { SimpleReporter } from '../simple-reporter';

describe('Status code validation', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://testeuseall.useall.com.br/apiuseall/api/Token';

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());

  describe('Verifying status code from endpoints', () => {
    it('Should be a bad request', async () => {
      await p
        .spec()
        .post(`${baseUrl}`)
        //.withHeaders
        .withForm({
          username: 'pedro.francisco@useall.com.br',
          password: '!@#Sandbox2020!@#',
          NomeConexao: 'TESTE',
          grant_type: 'password',
          form: true,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .expectStatus(200)
        .inspect();

    });
  });
});
// testes