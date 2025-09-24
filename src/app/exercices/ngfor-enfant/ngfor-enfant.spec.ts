import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforEnfant } from './ngfor-enfant';

describe('NgforEnfant', () => {
  let component: NgforEnfant;
  let fixture: ComponentFixture<NgforEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgforEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
