import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LzyModTwoComponent } from './lzy-mod-two.component';

describe('LzyModTwoComponent', () => {
  let component: LzyModTwoComponent;
  let fixture: ComponentFixture<LzyModTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LzyModTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LzyModTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
