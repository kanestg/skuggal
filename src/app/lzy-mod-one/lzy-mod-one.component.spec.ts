import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LzyModOneComponent } from './lzy-mod-one.component';

describe('LzyModOneComponent', () => {
  let component: LzyModOneComponent;
  let fixture: ComponentFixture<LzyModOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LzyModOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LzyModOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
