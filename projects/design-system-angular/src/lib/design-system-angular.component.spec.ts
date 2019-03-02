import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemAngularComponent } from './design-system-angular.component';

describe('DesignSystemAngularComponent', () => {
  let component: DesignSystemAngularComponent;
  let fixture: ComponentFixture<DesignSystemAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSystemAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSystemAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
