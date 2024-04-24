import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRightBgComponent } from './top-right-bg.component';

describe('TopRightBgComponent', () => {
  let component: TopRightBgComponent;
  let fixture: ComponentFixture<TopRightBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRightBgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRightBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
