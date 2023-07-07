import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaAmorComponent } from './historia-amor.component';

describe('HistoriaAmorComponent', () => {
  let component: HistoriaAmorComponent;
  let fixture: ComponentFixture<HistoriaAmorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriaAmorComponent]
    });
    fixture = TestBed.createComponent(HistoriaAmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
