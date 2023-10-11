import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOverviewByCliComponent } from './component-overview-by-cli.component';

describe('ComponentOverviewByCliComponent', () => {
  let component: ComponentOverviewByCliComponent;
  let fixture: ComponentFixture<ComponentOverviewByCliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentOverviewByCliComponent]
    });
    fixture = TestBed.createComponent(ComponentOverviewByCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
