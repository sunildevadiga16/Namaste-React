import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Online status should be green on rendering Header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const onLineStatus = header.getByTestId("online-status");
    expect(onLineStatus.innerHTML).toBe("✅");
});

test("Cart should have 0 items on rendering Header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart- 0 items");
});