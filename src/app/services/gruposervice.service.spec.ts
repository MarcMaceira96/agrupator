import { TestBed } from '@angular/core/testing';

import { GruposerviceService } from './gruposervice.service';

describe('GruposerviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GruposerviceService = TestBed.get(GruposerviceService);
    expect(service).toBeTruthy();
  });
});
