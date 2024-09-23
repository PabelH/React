import CounterApp from "../src/CounterApp";
import { render, screen } from "@testing-library/react";


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
});