import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateMessageComponent } from './form-create-message.component';

describe('FormCreateMessageComponent', () => {
  let component: FormCreateMessageComponent;
  let fixture: ComponentFixture<FormCreateMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreateMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
