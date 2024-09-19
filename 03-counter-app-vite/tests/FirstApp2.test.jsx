import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";


describe('Test in <FirstApp />', () => {

    const title = 'Hi MF'
    const subTitle = 'No SubtitleF'

    test('this test must match the snapshot"',()=>{

        const {container} = render(<FirstApp title={ title }/>);
        expect( container ).toMatchSnapshot();

    });

    test('this test should return "Hi MF"',()=>{

        render(<FirstApp title={ title }/>);
        expect( screen.getByText(title) ).toBeTruthy();
        //If you want it not to exist
        //expect( screen.getByText(title) ).not.toBeTruthy();
        //screen.debug();
        
    });

    test('this test should return the title in a h1 tag',()=>{

        render(<FirstApp title={ title }/>);
        expect( screen.getByRole('heading',{ level: 1 }).innerHTML ).toContain( title );
        
        
    });

    test('this test should show the subtitle sent by props',()=>{

        render(<FirstApp 
            title={ title }
            subTitle={ subTitle }
            />);
            expect( screen.getAllByText(subTitle).length ).toBe(2);

    
    
    
    });
    
  
});