<template type="text/pug">
    div.wrapper(role="img")
        span.name gabriel
        span.dot
        span.tr tr
        span.cursor \
</template>

<style type="text/stylus">
    @keyframes pulsate
        0%
            opacity 0.55
        90%
            opacity 0.45
        100%
            opacity 0.12

    div.wrapper
        display flex
        align-items center
        justify-content flex-start
        column-gap 0.3125rem
        user-select none

        *
            user-select none

        .name
            font-weight 500
        
        .dot
            square(0.3125rem)
            background #a8a8a8
            border-radius 50%
        
        .tr
            font-weight 400
        
        .cursor
            color #fff
            font-weight 700
            animation-name pulsate
            animation-iteration-count infinite
            animation-timing-function ease-in-out
            animation-play-state running
            animation-direction normal
            animation-duration 1s
</style>
