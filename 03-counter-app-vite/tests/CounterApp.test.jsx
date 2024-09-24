import CounterApp from "../src/CounterApp";
import { render, screen, fireEvent } from "@testing-library/react";


describe('Test in <CounterApp />', () => {

    const initialValue = 100;

    test('this test must match the snapshot"',()=>{

        const {container} = render(<CounterApp value={ initialValue }/>);
        expect( container ).toMatchSnapshot();

    });
    test('This test should show the initial value of 100"',()=>{

        render(<CounterApp value={ initialValue }/>);
        //expect( screen.getByText(100) ).toBeTruthy();
        //another way
        expect( screen.getByRole('heading',{level:2}).innerHTML ).toContain('100');

    });

    test('This test must be increased with the +1 button',()=>{

        render(<CounterApp value={ initialValue }/>);
        fireEvent.click( screen.getByText('+1') );
        //screen.debug();//you can see the DOM state
        expect( screen.getByText('101') ).toBeTruthy();

    });

    test('This test must be decremented with the -1 button',()=>{

        render(<CounterApp value={ initialValue }/>);
        fireEvent.click( screen.getByText('-1') );
        //screen.debug();//you can see the DOM state
        expect( screen.getByText('99') ).toBeTruthy();

    });

    test('The reset button must work', () => {
        
        render( <CounterApp value={ 400 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        //fireEvent.click( screen.getByText('Reset') );
        //another way
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText( 400 ) ).toBeTruthy();

    });

});