import React from 'react'
import Aux from '../../hoc/Auxilian'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer</div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout