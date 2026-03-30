import { TestAttribute } from "./footerItems"




export function footer() {

    return (
        <span style={{
            position : "absolute",
            bottom : "10px",
            right : "10px"



        }}>
            <TestAttribute title="contacts" />
            <TestAttribute title="email" />
            <TestAttribute title="address" />
        </span>
    )

}