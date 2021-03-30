/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { click } from '@app/mock-library/helpers';
import { ProjectStatus } from '../enums';

import { ProjectCardComponent } from './project-card.component';

const generateProject = (
  id = '1',
  name = 'My Project',
  status = 'new',
  price = 220,
  employees = ['Gosho'],
  createdAt = '2020-03-23'
) => ({
  id,
  name,
  status,
  price,
  employees,
  createdAt,
});

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;
  let onEditProjectSpy: jasmine.Spy;
  let onStartProjectSpy: jasmine.Spy;
  let onCompleteProjectSpy: jasmine.Spy;
  let onRemoveProjectSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectCardComponent],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    onEditProjectSpy = spyOn(component.editProject, 'emit');
    onStartProjectSpy = spyOn(component.startProject, 'emit');
    onCompleteProjectSpy = spyOn(component.completeProject, 'emit');
    onRemoveProjectSpy = spyOn(component.removeProject, 'emit');
    component.projectStatus = ProjectStatus;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('EDIT BUTTON', () => {
    it('should emit a onClick event when EDIT button is clicked', () => {
      component.project = generateProject('2', 'wdw', 'new');
      fixture.detectChanges();
      click(fixture.nativeElement.querySelector('#editBtn'));
      expect(onEditProjectSpy).toHaveBeenCalled();
    });

    it('should Edit button to be falsy', () => {
      component.project = generateProject('2', 'wdw', 'completed');
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('#editBtn')).toBeFalsy();
    });
  });

  describe('START BUTTON', () => {
    it('should emit a onClick event when START button is clicked', () => {
      component.project = generateProject('2', 'wdw', 'new');
      fixture.detectChanges();
      const btn = fixture.nativeElement.querySelector('#startBtn');
      expect(btn).toBeTruthy();
      click(btn);
      expect(onStartProjectSpy).toHaveBeenCalled();
    });

    it('should START button to be falsy', () => {
      component.project = generateProject('2', 'wdw', 'in progress');
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('#startBtn')).toBeFalsy();
    });
  });

  describe('DELETE BUTTON', () => {
    it('should emit a onClick event when DELETE button is clicked', () => {
      component.project = generateProject('2', 'wdw', 'new');
      fixture.detectChanges();
      const btn = fixture.nativeElement.querySelector('#deleteBtn');
      expect(btn).toBeTruthy();
      click(btn);
      expect(onRemoveProjectSpy).toHaveBeenCalled();
    });

    it('should DELETE button to be falsy', () => {
      component.project = generateProject('2', 'wdw', 'completed');
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('#deleteBtn')).toBeFalsy();
    });
  });

  describe('COMPLETE BUTTON', () => {
    it('should emit a onClick event when COMPLETE button is clicked', () => {
      component.project = generateProject('2', 'wdw', 'in progress');
      fixture.detectChanges();
      const btn = fixture.nativeElement.querySelector('#completeBtn');
      expect(btn).toBeTruthy();
      click(btn);
      expect(onCompleteProjectSpy).toHaveBeenCalled();
    });

    it('should COMPLETE button to be falsy', () => {
      component.project = generateProject('2', 'wdw', 'completed');
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('#completeBtn')).toBeFalsy();
    });
  });

  describe('Describe Card Text', () => {
    it('should have proper text', () => {
      component.project = generateProject();
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('#name').innerText).toEqual('Name: My Project');
      expect(fixture.nativeElement.querySelector('#status').innerText).toEqual('Status: new');
      expect(fixture.nativeElement.querySelector('#price').innerText).toEqual('Price: $220.00');
      expect(fixture.nativeElement.querySelector('#employees').innerText).toEqual('Employee: Gosho');
    });
  });
});
