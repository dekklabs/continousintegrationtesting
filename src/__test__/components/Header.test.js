import React from "react";
import { mount, shallow } from "enzyme";
import Header from "../../components/Header";
import ProviderMock from "../../__mocks__/ProviderMocks";
import { create } from "react-test-renderer";

describe('Pruebas en el component Header', () => {
    const header = shallow(
        <ProviderMock>
            <Header />
        </ProviderMock>,
    );
    test('prueba', () => {
        expect(header.length).toEqual(1);
    })
    test('Render del título', () => {
        const header2 = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>,
        );

        expect(header2.find(".Header-title").text()).toEqual("Platzi Store");
    })
});

describe('Header Snapshot', () => {
    test('Comprobate Snapshot Header', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );

        expect(header.toJSON()).toMatchSnapshot();
    });
});