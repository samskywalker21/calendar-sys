import { Flex, TextInput, Box, Button } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { Calendar, Search } from "lucide-react";

interface searchParam {
    searchText: string | null;
    dateRange: Array<object> | null;
}

const ListFilterComponent = () => {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            searchText: "",
            dateRange: [null, null],
        },
    });

    const handleFormSubmit = (data: Partial<searchParam>) => {
        console.log(data);
    };

    return (
        <>
            <form
                onSubmit={form.onSubmit((data) => {
                    handleFormSubmit(data);
                })}
            >
                <Flex direction={"row"} gap={"sm"} m={"xs"} w={"100%"}>
                    <Box w={"23rem"}>
                        <TextInput
                            placeholder="Enter an Activity Title"
                            label="Activity Title"
                            leftSection={<Search size={"1rem"} />}
                            leftSectionPointerEvents="none"
                            key={form.key("searchText")}
                            {...form.getInputProps("searchText")}
                        />
                    </Box>
                    <Box w={"20rem"}>
                        <DatePickerInput
                            type="range"
                            label="From - To"
                            placeholder="Set Date Range"
                            clearable
                            leftSection={<Calendar size={"1rem"} />}
                            leftSectionPointerEvents="none"
                            allowSingleDateInRange
                            key={form.key("dateRange")}
                            {...form.getInputProps("dateRange")}
                        />
                    </Box>
                    <Button type="submit" mt={"1.5rem"}>
                        Search
                    </Button>
                    <Button type="reset" mt={"1.5rem"} bg={"red"}>
                        Clear
                    </Button>
                </Flex>
            </form>
        </>
    );
};

export default ListFilterComponent;
