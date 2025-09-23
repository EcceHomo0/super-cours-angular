import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleEtClass } from './ng-style-et-class';

describe('NgStyleEtClass', () => {
  let component: NgStyleEtClass;
  let fixture: ComponentFixture<NgStyleEtClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyleEtClass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyleEtClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
