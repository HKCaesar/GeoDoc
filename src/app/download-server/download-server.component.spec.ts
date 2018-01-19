import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadServerComponent } from './download-server.component';

describe('DownloadServerComponent', () => {
  let component: DownloadServerComponent;
  let fixture: ComponentFixture<DownloadServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
