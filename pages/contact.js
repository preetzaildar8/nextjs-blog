import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function Contact() {
    return(
        <Layout>
            <form method="post">
            <label className={utilStyles.formlabel} for="first">First name:</label>
            <input className={utilStyles.input} type="text" id="first" name="first" /><br/>
            <label className={utilStyles.formlabel} for="last">Last name:</label>
            <input className={utilStyles.input} type="text" id="last" name="last" /><br/>
            <label className={utilStyles.formlabel} for="message">Message:</label>
            <textarea className={utilStyles.inputText} id="message" /><br/>
            <button className={utilStyles.formButton} type="submit">Submit</button>
            </form>
        </Layout>
    )
}