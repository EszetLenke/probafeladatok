import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicscrollPage } from './ionicscroll.page';

describe('IonicscrollPage', () => {
  let component: IonicscrollPage;
  let fixture: ComponentFixture<IonicscrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonicscrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
