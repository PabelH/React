import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";


describe('Test in <FirstApp />', () => {
    // test('this test must match the snapshot"',()=>{

    //     const title = 'Hi MF'
    //     const {container} = render(<FirstApp title={ title }/>);
    //     //console.log(container);
    //     expect( container ).toMatchSnapshot();


        
    // });
    test('this test must render the title in a h1 tag"',()=>{

        const title = 'Hi MF'
        const {container, getByText, getByTestId} = render(<FirstApp title={ title }/>);
        expect( getByText(title) ).toBeTruthy();
        const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe(title);
        // expect( h1.innerHTML ).toContain(title);
        // expect( getByTestId('test-title').innerHTML ).toBe(title);
        expect( getByTestId('test-title').innerHTML ).toContain(title);



        
    });
  
});