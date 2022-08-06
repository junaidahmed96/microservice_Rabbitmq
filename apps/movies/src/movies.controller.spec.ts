import { RmqModule } from '@app/common/rmq/rmq.module';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { BILLING_SERVICE } from './constants/services';
import { MoviesController } from './movies.controller';
import { MoviesModule } from './movies.module';
import { MoviesRepository } from './movies.repository';
import { MoviesService } from './movies.service';
import { Movie } from './schemas/movies.schema';
export interface MockClientProxy {
  send(pattern: string, simulation: any): any;
  connect(): any;
  close(): any;
  routingMap(): any;
}
describe('OrdersController', () => {
  let moviesController: MoviesController;
  let client: ClientProxy;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MoviesModule,
        ClientsModule.register([
          { name: BILLING_SERVICE, transport: Transport.RMQ },
        ]),
      ],
    }).compile();

    moviesController = app.get<MoviesController>(MoviesController);
  });

  describe('root', () => {
    it('should return "Movies!"', async () => {
      await moviesController.getMovies().then((data) => {
        expect(data).toBeDefined();
        expect(data[0].name).toEqual('movie-1');
      });
    });
    it('create movies!"', async () => {
      const obj = {
        name: 'movie-1',
        description: 'test-movie-1',
        genres: [
          {
            name: 'genres',
            description: 'test-genres',
          },
          {
            name: 'genres',
            description: 'test-genres',
          },
        ],
        releaseDate: '2003/01/01',
        duration: '1 hour',
        rating: '2',
      };

      expect(await (await moviesController.createMovie(obj)).name).toBe(
        obj.name,
      );
      expect(
        await await (
          await moviesController.createMovie(obj)
        ).description,
      ).toBe(obj.description);
    });
    it('should return "Genres!"', async () => {
      await moviesController.getGenres().then((data) => {
        expect(data).toBeDefined();
      });
    });
    it('create "Genres!"', async () => {
      const genres = {
        name: 'Action',
        description: 'fighting',
      };
      expect(await await moviesController.createGenres(genres)).toBeDefined();
    });
  });
});
