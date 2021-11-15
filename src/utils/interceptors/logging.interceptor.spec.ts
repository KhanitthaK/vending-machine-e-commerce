import { of } from 'rxjs';

import { LoggingInterceptor } from './logging.interceptor';

const returnCat = { name: 'Test Cat 1', breed: 'Test Breed 1', age: 4, id: 1 };
const next = {
  handle: () => of(returnCat),
};

const executionContext: any = {
  switchToHttp: jest.fn().mockReturnThis(),
  getRequest: jest.fn(() => {
    return {
      headers: {},
      connection: {},
    };
  }),
  getResponse: jest.fn().mockReturnThis(),
};

describe('LoggingInterceptor', () => {
  let interceptor: LoggingInterceptor;

  beforeEach(() => {
    interceptor = new LoggingInterceptor();
  });
  it('should be defined', () => {
    expect(interceptor).toBeDefined();
  });
  describe('should return the data wrapped in data object', () => {
    it('should successfully return', done => {
      executionContext.getResponse.mockReturnValueOnce({
        statusCode: 200,
      });
      interceptor.intercept(executionContext, next).subscribe({
        next: value => {
          expect(value).toEqual(returnCat);
        },
        error: error => {
          throw error;
        },
        complete: () => {
          done();
        },
      });
    });

    it('should server error return', done => {
      executionContext.getResponse.mockReturnValueOnce({
        statusCode: 500,
      });
      interceptor.intercept(executionContext, next).subscribe({
        next: value => {
          expect(value).toEqual(returnCat);
        },
        error: error => {
          throw error;
        },
        complete: () => {
          done();
        },
      });
    });
  });
});
