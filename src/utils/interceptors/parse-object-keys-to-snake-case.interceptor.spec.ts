import { of } from 'rxjs';

import { ParseObjectKeysToSnakeCaseInterceptor } from './parse-object-keys-to-snake-case.interceptor';

describe('ParseObjectKeysToSnakeCaseInterceptor', () => {
  const subject = new ParseObjectKeysToSnakeCaseInterceptor();

  it('should be defined', () => {
    expect(subject).toBeDefined();
  });

  describe('#intercept', () => {
    describe('when handler object', () => {
      const callHandler = {
        handle: () => of({ helloWorld: { iAm: 'nestedWorld' } }),
      };

      it('should be convert object nested keys to snake case', () => {
        subject.intercept({} as any, callHandler).subscribe({
          next: value => {
            expect(value).toEqual({ hello_world: { i_am: 'nestedWorld' } });
          },
        });
      });
    });

    describe('when handler other', () => {
      const callHandler = {
        handle: () => of('helloWorld'),
      };

      it('should be convert object nested keys to snake case', () => {
        subject.intercept({} as any, callHandler).subscribe({
          next: value => {
            expect(value).toEqual('helloWorld');
          },
        });
      });
    });
  });
});
