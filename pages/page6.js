import Footer from "../components/footer1"
import Head from "next/head"

let Page = function() {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="description" content="Let's make the web great again" />
                <meta name="keywords" content="sample, react, demo, awesome" />
            </Head>
            <h1>This page is awesome!</h1>
            <div className="yellow">
                This is our great new page! It's great! It really is! It's
                awesome! Let's make the web great again!
            </div>
            <Footer />
        </div>
    )
}

export default Page
