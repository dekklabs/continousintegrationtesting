import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProviderMocks";
import ProductMock from "../../__mocks__/ProductMock";
import Product from "../../components/Product";

describe('<Product />', () => {
    test('Render component Products', () => {
        const product = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>
        );

        expect(product.length).toEqual(1);
    });

    test('Comprobate button buy', () => {
        const handleAddtoCard = jest.fn();
        const wrapper = mount(
            <ProviderMock>
                <Product
                    product={ProductMock}
                    handleAddToCart={handleAddtoCard}
                />
            </ProviderMock>,
        );

        wrapper.find("button").simulate("click");
        expect(handleAddtoCard).toHaveBeenCalledTimes(1);
    });
});