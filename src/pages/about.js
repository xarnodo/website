import React from "react"

import Layout from "../components/layouts/layout"
import About from "../components/About/index"

const Developer = (props) => {
    return (
        <Layout location={props.location}>
            <About />
        </Layout>
    )
}

export default Developer