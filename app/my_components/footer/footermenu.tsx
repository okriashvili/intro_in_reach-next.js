import { FooterAttribute } from "./footerItems"
import "./footer.css"



export function footer() {

    return (
        <footer className="footer_container">
            <FooterAttribute title="contacts" />
            <FooterAttribute title="email" />
            <FooterAttribute title="address" />
        </footer>
    )

}