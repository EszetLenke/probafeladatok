import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VirtualscrollPage } from './virtualscroll.page';

describe('VirtualscrollPage', () => {
  let component: VirtualscrollPage;
  let fixture: ComponentFixture<VirtualscrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VirtualscrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
