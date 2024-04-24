import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueDetailComponent } from './catalogue-detail.component';

describe('CatalogueDetailComponent', () => {
  let component: CatalogueDetailComponent;
  let fixture: ComponentFixture<CatalogueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogueDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
