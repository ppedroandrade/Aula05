import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PedidosdetailsComponent } from './pedidosdetails.component';

describe('PedidosdetailsComponent', () => {
  let fixture: ComponentFixture<PedidosdetailsComponent>;
  let component: PedidosdetailsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PedidosdetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(PedidosdetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the input value correctly', () => {
    component.pedido = { id: 1, produtos: [], obs: 'teste' };
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(
      By.css('input[name="exampleInputText1"]')
    ).nativeElement;
    inputElement.value = 'Test Input Value'; // Set a test value

    // Trigger the input event to update ngModel
    inputElement.dispatchEvent(new Event('input'));

    // Access the bound value
    const boundValue = component.pedido.obs;

    expect(boundValue).toEqual('Test Input Value');
  });

  // Add more tests as needed
});
