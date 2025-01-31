import {
    Flex,
    TextInput,
    PasswordInput,
    Button,
    LoadingOverlay,
} from "@mantine/core";
import { CircleUser, RectangleEllipsis } from "lucide-react";

import { useForm } from "@mantine/form";
import { useState } from "react";

type formData = {
    username: string;
    password: string;
};

const LoginForm = () => {
    const [isLoading, setLoading] = useState(false);

    const form = useForm({
        mode: "controlled",
        onSubmitPreventDefault: "always",
        initialValues: {
            username: "",
            password: "",
        },
        validate: {
            username: (value) =>
                value.length <= 0 ? "Invalid Username" : null,
            password: (value) =>
                value.length <= 0 ? "Invalid Password" : null,
        },
    });

    const onSubmit = (data: formData) => {
        setLoading((prevState) => !prevState);
        setTimeout(() => {
            form.validate();
            console.log(data);
            setLoading((prevState) => !prevState);
            form.reset();
        }, 3000);
    };

    const loginIcon = <CircleUser />;
    const passwordIcon = <RectangleEllipsis />;

    return (
        <form
            onSubmit={form.onSubmit((values) => onSubmit(values))}
            onReset={form.onReset}
        >
            <Flex direction={"column"} mt={"3rem"} gap={"2rem"} w={"25rem"}>
                <LoadingOverlay
                    visible={isLoading}
                    overlayProps={{ blur: 2 }}
                    loaderProps={{ type: "bars" }}
                />
                <TextInput
                    key={form.key("username")}
                    size="sm"
                    w={"100%"}
                    radius={"md"}
                    withAsterisk
                    placeholder="Username"
                    leftSection={loginIcon}
                    aria-label="Username"
                    {...form.getInputProps("username")}
                />
                <PasswordInput
                    key={form.key("password")}
                    size="sm"
                    w={"100%"}
                    radius={"md"}
                    withAsterisk
                    placeholder="Password"
                    leftSection={passwordIcon}
                    aria-label="Password"
                    {...form.getInputProps("password")}
                />
                <Flex
                    direction={"row"}
                    align={"center"}
                    justify={"center"}
                    gap={"lg"}
                >
                    <Button
                        type="submit"
                        size="md"
                        radius="md"
                        fullWidth
                        aria-label="Login Button"
                    >
                        Login
                    </Button>
                    <Button
                        type="reset"
                        size="md"
                        radius="md"
                        fullWidth
                        bg={"red"}
                        aria-label="Cancel Button"
                    >
                        Cancel
                    </Button>
                </Flex>
            </Flex>
        </form>
    );
};

export default LoginForm;
