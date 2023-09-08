import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SigninForm from "./SigninForm";

describe("SigninForm", () => {
    it("should render without errors", () => {
        render(
            <MemoryRouter>
                <SigninForm />
            </MemoryRouter>
        );

    });

    it("should render a form with title, location, image, and description fields", () => {
        const { getByLabelText } = render(
            <MemoryRouter>
                <SigninForm />
            </MemoryRouter>
        );

        expect(getByLabelText("Nombre")).toBeInTheDocument();
        expect(getByLabelText("E-mail")).toBeInTheDocument();
        expect(getByLabelText("Contraseña")).toBeInTheDocument();

    });

});