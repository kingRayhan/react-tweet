import React from 'react'

export default function errors({ errors }) {
    return errors.map((e, i) => (
        <div className="alert alert-danger" key={i}>
            {e}
        </div>
    ))
}
