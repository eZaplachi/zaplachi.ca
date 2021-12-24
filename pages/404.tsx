import Layout from "../components/Layout"
// TODO Better error page
const NotFound = () => {
    return(
        <div>
            <Layout footerText="Error 404" stickyOffset={0}>
                <div>
                    <p>Page not found</p>
                </div>
            </Layout>
        </div>
    )
}

export default NotFound