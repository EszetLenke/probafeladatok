import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CiklusPage } from './ciklus.page';

describe('CiklusPage', () => {
  let component: CiklusPage;
  let fixture: ComponentFixture<CiklusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CiklusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
