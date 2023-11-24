import { TestBed } from '@angular/core/testing';
import { HttpRequestInterceptor } from './httpinterceptor.service';
describe('HttpRequestInterceptor', () => {
  let interceptor: HttpRequestInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    interceptor = TestBed.inject(HttpRequestInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
