import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LzyModThreeComponent } from './lzy-mod-three.component';

describe('LzyModThreeComponent', () => {
  let component: LzyModThreeComponent;
  let fixture: ComponentFixture<LzyModThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LzyModThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LzyModThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
