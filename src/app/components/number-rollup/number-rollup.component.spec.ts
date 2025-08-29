import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberRollupComponent } from './number-rollup.component';

describe('NumberRollupComponent', () => {
  let component: NumberRollupComponent;
  let fixture: ComponentFixture<NumberRollupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberRollupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberRollupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
