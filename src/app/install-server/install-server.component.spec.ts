import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallServerComponent } from './install-server.component';

describe('InstallServerComponent', () => {
  let component: InstallServerComponent;
  let fixture: ComponentFixture<InstallServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
