import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegisteredComponent } from './list-registered.component';

describe('ListRegisteredComponent', () => {
  let component: ListRegisteredComponent;
  let fixture: ComponentFixture<ListRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRegisteredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
