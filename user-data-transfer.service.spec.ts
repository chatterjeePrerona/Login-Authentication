import { TestBed } from '@angular/core/testing';

import { UserDataTransferService } from './user-data-transfer.service';

describe('UserDataTransferService', () => {
  let service: UserDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
