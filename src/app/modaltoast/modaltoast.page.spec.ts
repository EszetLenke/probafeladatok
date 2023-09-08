import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModaltoastPage } from './modaltoast.page';

describe('ModaltoastPage', () => {
  let component: ModaltoastPage;
  let fixture: ComponentFixture<ModaltoastPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModaltoastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
