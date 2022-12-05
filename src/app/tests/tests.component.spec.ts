import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsComponent } from './tests.component';

describe('TestsComponent', () => {
  let component: TestsComponent;
  let fixture: ComponentFixture<TestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*Permet de verifier que le score est > 0 */
  it('it is negative, not possible to decrement',() => {
    fixture.detectChanges();
    expect(fixture.componentInstance.myScore).toEqual(0);
  });

  it('it possible to increment and decrement',() => {
    fixture.componentInstance.increment();
    expect(fixture.componentInstance.myScore).toEqual(100);

    fixture.componentInstance.decrement();
    expect(fixture.componentInstance.myScore).toEqual(0);
  });


});
