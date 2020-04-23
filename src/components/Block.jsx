import React from 'react'

export default function Block(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}