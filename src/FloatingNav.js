import React from 'react'
import { Container, Button, Link } from 'react-floating-action-button'

function FloatingNav() {
    return (
        <Container>
            <Link href="/"
                tooltip="Home"
                icon="far fa-sticky-note" />
            <Link href="/about"
                tooltip="About"
                icon="fas fa-user-plus" 
                className="fab-item btn btn-link btn-lg text-white"/>
            <Button
                tooltip="The big plus button!"
                icon="fas fa-plus"
                rotate={true}
                onClick={() => alert('FAB Rocks!')} />
        </Container>
    )
}

export default FloatingNav;