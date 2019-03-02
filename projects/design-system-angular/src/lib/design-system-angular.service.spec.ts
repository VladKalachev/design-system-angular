import { TestBed } from '@angular/core/testing';

import { DesignSystemAngularService } from './design-system-angular.service';

describe('DesignSystemAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignSystemAngularService = TestBed.get(DesignSystemAngularService);
    expect(service).toBeTruthy();
  });
});
