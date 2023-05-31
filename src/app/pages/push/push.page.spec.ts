import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PushPage } from './push.page';

describe('PushPage', () => {
  let component: PushPage;
  let fixture: ComponentFixture<PushPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
