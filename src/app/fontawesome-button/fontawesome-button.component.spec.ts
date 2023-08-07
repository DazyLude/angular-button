import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontawesomeButtonComponent } from './fontawesome-button.component';

describe('FontawesomeButtonComponent', () => {
  let component: FontawesomeButtonComponent;
  let fixture: ComponentFixture<FontawesomeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontawesomeButtonComponent]
    });
    fixture = TestBed.createComponent(FontawesomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
