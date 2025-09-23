import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireNgModel } from './formulaire-ng-model';

describe('FormulaireNgModel', () => {
  let component: FormulaireNgModel;
  let fixture: ComponentFixture<FormulaireNgModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireNgModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireNgModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
