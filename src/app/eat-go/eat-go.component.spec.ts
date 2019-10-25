import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatGoComponent } from './eat-go.component';

describe('EatGoComponent', () => {
  let component: EatGoComponent;
  let fixture: ComponentFixture<EatGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
