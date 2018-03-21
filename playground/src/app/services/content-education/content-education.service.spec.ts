import { TestBed, inject } from '@angular/core/testing';

import { ContentEducationService } from './content-education.service';

describe('ContentEducationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentEducationService]
    });
  });

  it('should be created', inject([ContentEducationService], (service: ContentEducationService) => {
    expect(service).toBeTruthy();
  }));
});
