import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpDirectives } from './tp-directives';

describe('TpDirectives', () => {
  let component: TpDirectives;
  let fixture: ComponentFixture<TpDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
