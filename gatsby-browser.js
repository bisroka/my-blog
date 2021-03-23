import React from "react"
import StoreProvider  from "./src/store/StoreProvider"

const transitionDelay = 500

export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    if (location.action === 'PUSH') {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
            () => window.scrollTo(...(savedPosition || [0, 0])),
            transitionDelay
        )
    }
    return false
}

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)