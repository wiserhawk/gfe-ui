import { TestBed } from '@angular/core/testing';

import { BlogsHttpService } from './blogs-http.service';

describe('BlogsHttpService', () => {
  let service: BlogsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
