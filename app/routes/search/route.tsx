import {Form, Outlet} from "@remix-run/react";
import type { FunctionComponent } from "react";

import type { ContactRecord } from "../data";
import {Button, Input, TextInput} from "@mantine/core";


export default function Search() {

    return (
        <div id="search">
            <div>
                <TextInput size="md" radius="xl" placeholder="Search..." />
                <Button >Search</Button>
            </div>

            <div>
                <Outlet/>


            </div>
        </div>
    );
}

