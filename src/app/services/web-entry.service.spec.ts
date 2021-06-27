import { TestBed } from '@angular/core/testing';

import { WebEntryService } from './web-entry.service';

describe('WebEntryService', () => {
  let service: WebEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
