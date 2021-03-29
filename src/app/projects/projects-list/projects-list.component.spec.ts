/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsListComponent } from './projects-list.component';

describe('ProjectsListComponent', () => {
  let component: ProjectsListComponent;
  let fixture: ComponentFixture<ProjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has title NEW when the passed from input', () => {
    component.title = 'new';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#title').innerText).toBe('NEW');
  });

  it('should has title IN PROGRESS when the passed from input', () => {
    component.title = 'in progress';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#title').innerText).toBe('IN PROGRESS');
  });

  it('should has title COMPLETED when the passed from input', () => {
    component.title = 'completed';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#title').innerText).toBe('COMPLETED');
  });
});
