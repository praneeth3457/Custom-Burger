import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBuildComponent } from './custom-build.component';

describe('CustomBuildComponent', () => {
  let component: CustomBuildComponent;
  let fixture: ComponentFixture<CustomBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
