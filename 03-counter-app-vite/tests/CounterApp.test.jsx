import CounterApp from "../src/CounterApp";
import { render, screen } from "@testing-library/react";


describe('Test in <CounterApp />', () => {

    const initialValue = 100;

    test('this test must match the snapshot"',()=>{

        const {container} = render(<CounterApp value={ initialValue }/>);
        expect( container ).toMatchSnapshot();

    });
});