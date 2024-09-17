import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";


describe('Test in <FirstApp />', () => {
    test('this test must match the snapshot"',()=>{

        const title = 'Hi MF'
        render(<FirstApp title={ title }/>)
        
        
    });
  
});