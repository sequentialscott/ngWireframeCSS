import { TestBed, inject } from '@angular/core/testing';

import { StyleGuideService } from './style-guide.service';

describe('TopicListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleGuideService]
    });
  });

  it('should be created', inject([StyleGuideService], (service: StyleGuideService) => {
    expect(service).toBeTruthy();
  }));
});
