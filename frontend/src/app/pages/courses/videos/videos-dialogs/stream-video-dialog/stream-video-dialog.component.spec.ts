import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamVideoDialogComponent } from './stream-video-dialog.component';

describe('StreamVideoDialogComponent', () => {
  let component: StreamVideoDialogComponent;
  let fixture: ComponentFixture<StreamVideoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamVideoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamVideoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
