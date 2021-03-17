import React from 'react';
import { mount } from "enzyme";
import Footer from "../../components/Footer";
import { create } from "react-test-renderer";

describe("Pruebas en Footer.js", () => {
    
    const footer = mount(<Footer />);
    test('Render del componente Footer', () => {
        expect(footer.length).toEqual(1);
    });
    test('Render del título', () => {
        expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");
    });
});

describe('Footer snapshot', () => {
    test('Comprobate UI component Footer', () => {
        const footer = create(<Footer />);

        expect(footer.toJSON()).toMatchSnapshot();
    });
});