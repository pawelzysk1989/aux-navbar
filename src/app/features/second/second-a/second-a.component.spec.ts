import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAComponent } from './second-a.component';

describe('SecondAComponent', () => {
  let component: SecondAComponent;
  let fixture: ComponentFixture<SecondAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
