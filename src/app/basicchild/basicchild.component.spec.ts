import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicchildComponent } from './basicchild.component';

describe('BasicchildComponent', () => {
  let component: BasicchildComponent;
  let fixture: ComponentFixture<BasicchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
