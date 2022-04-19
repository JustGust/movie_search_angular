import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMovieComponent } from './cart-movie.component';

describe('CartMovieComponent', () => {
  let component: CartMovieComponent;
  let fixture: ComponentFixture<CartMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
