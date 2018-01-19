import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadLibComponent } from './download-lib.component';

describe('DownloadLibComponent', () => {
  let component: DownloadLibComponent;
  let fixture: ComponentFixture<DownloadLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
