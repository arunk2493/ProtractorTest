import {browser} from "protractor";
describe("Sample Typesript",() => {
    it('Sample Test',async ()=>{
        browser.get('https://www.google.com');
        expect(browser.getTitle()).toContain('Google');
    })
})
