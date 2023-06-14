import { TestBed } from '@angular/core/testing';

import { DropMenuService } from './drop-menu.service';

describe('DropMenuService', () => {
  let service: DropMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
