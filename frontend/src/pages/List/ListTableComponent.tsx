import { Table } from "@mantine/core";

const ListTableComponent = () => {
    return (
        <>
            <Table mt={"1rem"} style={{ overflowX: "visible" }}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Activity Title</Table.Th>
                        <Table.Th visibleFrom="lg">
                            Cluster/Section/Unit
                        </Table.Th>
                        <Table.Th visibleFrom="lg">
                            Program Manager/Section Head
                        </Table.Th>
                        <Table.Th>Start Date</Table.Th>
                        <Table.Th>End Date</Table.Th>
                        <Table.Th>Participants</Table.Th>
                        <Table.Th>Venue</Table.Th>
                        <Table.Th>Status</Table.Th>
                    </Table.Tr>
                </Table.Thead>
            </Table>
        </>
    );
};

export default ListTableComponent;
