import CounterApp from "../src/CounterApp";
import { render, screen } from "@testing-library/react";


describe('Test in <CounterApp />', () => {

    const title = 'CounterApp'

    test('this test must match the snapshot"',()=>{

        const {container} = render(<CounterApp value={ 100 }/>);
        expect( container ).toMatchSnapshot();

    });
});