import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MahasiswaPage } from './mahasiswa.page';

describe('MahasiswaPage', () => {
  let component: MahasiswaPage;
  let fixture: ComponentFixture<MahasiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

