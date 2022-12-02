import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosWebFsComponent } from './modulos-web-fs.component';

describe('ModulosWebFsComponent', () => {
  let component: ModulosWebFsComponent;
  let fixture: ComponentFixture<ModulosWebFsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosWebFsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulosWebFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
