import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponenetsComponent } from './header-componenets.component';

describe('HeaderComponenetsComponent', () => {
  let component: HeaderComponenetsComponent;
  let fixture: ComponentFixture<HeaderComponenetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponenetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponenetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
