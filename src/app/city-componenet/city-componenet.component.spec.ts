import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityComponenetComponent } from './city-componenet.component';

describe('CityComponenetComponent', () => {
  let component: CityComponenetComponent;
  let fixture: ComponentFixture<CityComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
