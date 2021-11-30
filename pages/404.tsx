import Layout from "../components/Layout"

const NotFound = () => {
    return(
        <main>
            <Layout footerText="Error 404" stickyOffset={0}>
                <div>
                    <p>Page not found</p>
                </div>
            </Layout>
        </main>
    )
}

export default NotFound