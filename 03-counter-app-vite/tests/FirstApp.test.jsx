import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";


describe('Test in <FirstApp />', () => {
    test('this test must match the snapshot"',()=>{

        const title = 'Hi MF'
        const {container} = render(<FirstApp title={ title }/>);
        //console.log(container);
        expect( container ).toMatchSnapshot();


        
    });
    test('this test must render the title in a h1 tag"',()=>{

        const title = 'Hi MF'
        const {container} = render(<FirstApp title={ title }/>);
        //console.log(container);
        expect( container ).toMatchSnapshot();


        
    });
  
});